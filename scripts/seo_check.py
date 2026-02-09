#!/usr/bin/env python3
"""
SEO check script for najatkobi-therapie.ma.
Run against a URL or local files.

Usage:
  python3 scripts/seo_check.py --local              # no deps, checks local files only
  python3 scripts/seo_check.py [URL]                # needs: pip install -r requirements-seo.txt
  python3 scripts/seo_check.py                      # checks https://najatkobi-therapie.ma/
"""

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

HAS_DEPS = False
try:
    import requests
    from bs4 import BeautifulSoup
    HAS_DEPS = True
except ImportError:
    pass

# Default base URL
DEFAULT_URL = "https://najatkobi-therapie.ma/"
PROJECT_ROOT = Path(__file__).resolve().parent.parent

# SEO guidelines
META_DESC_MAX_CHARS = 160
META_DESC_MIN_CHARS = 50
TITLE_MIN_CHARS = 30
TITLE_MAX_CHARS = 60
MIN_WORDS = 250
MIN_INTERNAL_LINKS = 5


def fetch_url(url: str) -> tuple[str | None, str | None]:
    """Fetch URL and return (html, error)."""
    try:
        r = requests.get(url, timeout=15, headers={"User-Agent": "SEO-Check-Bot/1.0"})
        r.raise_for_status()
        return r.text, None
    except requests.RequestException as e:
        return None, str(e)


def parse_html(html: str) -> BeautifulSoup:
    return BeautifulSoup(html, "html.parser")


def check_meta(soup: BeautifulSoup) -> list[tuple[str, str, str]]:
    """Returns list of (check_name, status, detail)."""
    results = []

    # Title
    title = soup.find("title")
    if not title or not title.get_text(strip=True):
        results.append(("Title", "ERROR", "No <title> found"))
    else:
        t = title.get_text(strip=True)
        if len(t) < TITLE_MIN_CHARS:
            results.append(("Title", "WARNING", f"Too short ({len(t)} chars, min {TITLE_MIN_CHARS})"))
        elif len(t) > TITLE_MAX_CHARS:
            results.append(("Title", "WARNING", f"Too long ({len(t)} chars, max {TITLE_MAX_CHARS})"))
        else:
            results.append(("Title", "OK", f"{len(t)} chars"))

    # Meta description
    desc = soup.find("meta", attrs={"name": "description"})
    if not desc or not desc.get("content", "").strip():
        results.append(("Meta description", "ERROR", "Missing"))
    else:
        content = desc.get("content", "").strip()
        if len(content) > META_DESC_MAX_CHARS:
            results.append(("Meta description", "WARNING", f"Too long ({len(content)} chars, max {META_DESC_MAX_CHARS})"))
        elif len(content) < META_DESC_MIN_CHARS:
            results.append(("Meta description", "WARNING", f"Too short ({len(content)} chars)"))
        else:
            results.append(("Meta description", "OK", f"{len(content)} chars"))

    # Meta keywords
    kw = soup.find("meta", attrs={"name": "keywords"})
    if not kw or not kw.get("content", "").strip():
        results.append(("Meta keywords", "WARNING", "Missing (optional but recommended)"))
    else:
        results.append(("Meta keywords", "OK", "Present"))

    # Charset
    charset = soup.find("meta", attrs={"charset": True}) or soup.find("meta", attrs={"http-equiv": re.compile(r"content-type", re.I)})
    if charset:
        results.append(("Charset", "OK", "Declared in HTML"))
    else:
        results.append(("Charset", "WARNING", "Not found in HTML (server may send header)"))

    # Canonical
    canon = soup.find("link", attrs={"rel": "canonical"})
    if not canon or not canon.get("href"):
        results.append(("Canonical URL", "WARNING", "Missing"))
    else:
        results.append(("Canonical URL", "OK", canon.get("href", "")[:60]))

    # Open Graph
    og_title = soup.find("meta", property="og:title")
    og_desc = soup.find("meta", property="og:description")
    if og_title and og_desc:
        results.append(("Open Graph", "OK", "og:title and og:description present"))
    else:
        results.append(("Open Graph", "WARNING", "Missing og:title or og:description"))

    # Apple touch icon
    apple = soup.find("link", attrs={"rel": "apple-touch-icon"})
    if apple:
        results.append(("Apple touch icon", "OK", "Present"))
    else:
        results.append(("Apple touch icon", "WARNING", "Missing"))

    # Google site verification
    gv = soup.find("meta", attrs={"name": "google-site-verification"})
    if gv:
        results.append(("Google verification", "OK", "Present"))
    else:
        results.append(("Google verification", "TIP", "Optional"))

    return results


def check_headings(soup: BeautifulSoup) -> list[tuple[str, str, str]]:
    results = []
    h1s = soup.find_all("h1")
    if not h1s:
        results.append(("H1 heading", "ERROR", "No H1 found"))
    elif len(h1s) > 1:
        results.append(("H1 heading", "WARNING", f"Multiple H1s ({len(h1s)}), prefer one per page"))
    else:
        results.append(("H1 heading", "OK", h1s[0].get_text(strip=True)[:50] + "…" if len(h1s[0].get_text(strip=True)) > 50 else h1s[0].get_text(strip=True)))

    h2s = soup.find_all("h2")
    h3s = soup.find_all("h3")
    if h2s or h3s:
        results.append(("Headings structure", "OK", f"H2: {len(h2s)}, H3: {len(h3s)}"))
    else:
        results.append(("Headings structure", "WARNING", "No H2/H3 (structure helps SEO)"))

    return results


def check_links(soup: BeautifulSoup, base_url: str) -> list[tuple[str, str, str]]:
    results = []
    base_domain = urlparse(base_url).netloc
    internal = 0
    all_links = soup.find_all("a", href=True)
    for a in all_links:
        href = a.get("href", "").strip()
        if not href or href.startswith("#") or href.startswith("javascript:"):
            continue
        full = urljoin(base_url, href)
        if urlparse(full).netloc == base_domain or full.startswith("/"):
            internal += 1

    if internal >= MIN_INTERNAL_LINKS:
        results.append(("Internal links", "OK", f"{internal} internal links"))
    elif internal > 0:
        results.append(("Internal links", "WARNING", f"Only {internal} internal links (recommend ≥{MIN_INTERNAL_LINKS})"))
    else:
        results.append(("Internal links", "ERROR", "No internal links found (SPA content may not be loaded)"))

    return results


def word_count(soup: BeautifulSoup) -> int:
    # Remove script/style
    for tag in soup(["script", "style"]):
        tag.decompose()
    text = soup.get_text(separator=" ", strip=True)
    return len(text.split())


def check_content(soup: BeautifulSoup) -> list[tuple[str, str, str]]:
    results = []
    words = word_count(soup)
    if words >= MIN_WORDS:
        results.append(("Word count", "OK", f"~{words} words (≥{MIN_WORDS})"))
    else:
        results.append(("Word count", "WARNING", f"~{words} words (recommend ≥{MIN_WORDS}; JS-rendered content may not be counted)"))

    paragraphs = soup.find_all("p")
    if paragraphs:
        results.append(("Paragraphs", "OK", f"{len(paragraphs)} <p> tags"))
    else:
        results.append(("Paragraphs", "WARNING", "No <p> tags (content may be in JS)"))

    return results


def check_local_files() -> list[tuple[str, str, str]]:
    results = []
    index_path = PROJECT_ROOT / "index.html"
    if not index_path.exists():
        results.append(("Local index.html", "ERROR", "Not found"))
        return results
    results.append(("Local index.html", "OK", "Found"))

    sitemap = PROJECT_ROOT / "public" / "sitemap.xml"
    if sitemap.exists():
        content = sitemap.read_text(encoding="utf-8")
        urls = len(re.findall(r"<loc>", content))
        results.append(("Sitemap", "OK", f"Found, {urls} URL(s)"))
    else:
        results.append(("Sitemap", "WARNING", "public/sitemap.xml not found"))

    robots = PROJECT_ROOT / "public" / "robots.txt"
    if robots.exists():
        text = robots.read_text(encoding="utf-8")
        if "Sitemap:" in text:
            results.append(("robots.txt", "OK", "Contains Sitemap"))
        else:
            results.append(("robots.txt", "WARNING", "Missing Sitemap directive"))
    else:
        results.append(("robots.txt", "WARNING", "public/robots.txt not found"))

    return results


def run_url_checks(url: str) -> None:
    print(f"\n🔍 SEO check: {url}\n")
    html, err = fetch_url(url)
    if err:
        print(f"ERROR: Could not fetch URL: {err}")
        return
    soup = parse_html(html)
    base = url.rstrip("/") + "/"

    all_results = []
    all_results.extend(check_meta(soup))
    all_results.extend(check_headings(soup))
    all_results.extend(check_links(soup, base))
    all_results.extend(check_content(soup))

    print_results(all_results)
    print("\n--- Local files ---")
    print_results(check_local_files())


def run_local_checks() -> None:
    print("\n🔍 SEO check (local files)\n")
    index_path = PROJECT_ROOT / "index.html"
    if not index_path.exists():
        print("ERROR: index.html not found in project root")
        return
    html = index_path.read_text(encoding="utf-8")

    if HAS_DEPS:
        soup = parse_html(html)
        base = DEFAULT_URL
        all_results = []
        all_results.extend(check_meta(soup))
        all_results.extend(check_headings(soup))
        all_results.extend(check_links(soup, base))
        all_results.extend(check_content(soup))
        all_results.extend(check_local_files())
        print_results(all_results)
    else:
        run_local_checks_stdlib(html)


def print_results(results: list[tuple[str, str, str]]) -> None:
    for name, status, detail in results:
        icon = {"OK": "✅", "WARNING": "⚠️", "ERROR": "❌", "TIP": "💡"}.get(status, "•")
        print(f"  {icon} {name}: {detail}")


def run_local_checks_stdlib(html: str) -> None:
    """Run checks using only stdlib (regex). No requests/beautifulsoup needed."""
    results = []

    # Title
    m = re.search(r"<title[^>]*>([^<]+)</title>", html, re.I | re.DOTALL)
    if m:
        t = m.group(1).strip()
        if len(t) < TITLE_MIN_CHARS:
            results.append(("Title", "WARNING", f"Too short ({len(t)} chars)"))
        elif len(t) > TITLE_MAX_CHARS:
            results.append(("Title", "WARNING", f"Too long ({len(t)} chars)"))
        else:
            results.append(("Title", "OK", f"{len(t)} chars"))
    else:
        results.append(("Title", "ERROR", "No <title> found"))

    # Meta description
    m = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', html, re.I)
    if m:
        content = m.group(1).strip()
        if len(content) > META_DESC_MAX_CHARS:
            results.append(("Meta description", "WARNING", f"Too long ({len(content)} chars)"))
        else:
            results.append(("Meta description", "OK", f"{len(content)} chars"))
    else:
        results.append(("Meta description", "ERROR", "Missing"))

    # Meta keywords
    if re.search(r'<meta\s+name=["\']keywords["\']\s+content=', html, re.I):
        results.append(("Meta keywords", "OK", "Present"))
    else:
        results.append(("Meta keywords", "WARNING", "Missing"))

    # Charset
    if re.search(r'<meta\s+charset=', html, re.I):
        results.append(("Charset", "OK", "Declared"))
    else:
        results.append(("Charset", "WARNING", "Not found"))

    # Canonical
    m = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', html, re.I)
    if m:
        results.append(("Canonical URL", "OK", m.group(1)[:50]))
    else:
        results.append(("Canonical URL", "WARNING", "Missing"))

    # Open Graph
    if re.search(r'<meta\s+property=["\']og:title["\']', html, re.I) and re.search(r'og:description', html, re.I):
        results.append(("Open Graph", "OK", "og:title and og:description present"))
    else:
        results.append(("Open Graph", "WARNING", "Missing og:title or og:description"))

    # Apple touch icon
    if re.search(r'<link[^>]+rel=["\']apple-touch-icon["\']', html, re.I):
        results.append(("Apple touch icon", "OK", "Present"))
    else:
        results.append(("Apple touch icon", "WARNING", "Missing"))

    # H1
    h1s = re.findall(r"<h1[^>]*>([^<]+)</h1>", html, re.I)
    if not h1s:
        results.append(("H1 heading", "ERROR", "No H1 found"))
    elif len(h1s) > 1:
        results.append(("H1 heading", "WARNING", f"Multiple H1s ({len(h1s)})"))
    else:
        results.append(("H1 heading", "OK", h1s[0].strip()[:50]))

    # Internal links (from noscript and any static links)
    links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', html, re.I)
    internal = sum(1 for h in links if h.startswith("/") or h.startswith("#") or DEFAULT_URL.replace("https://", "").split("/")[0] in h)
    if internal >= MIN_INTERNAL_LINKS:
        results.append(("Internal links", "OK", f"{internal} links (in HTML)"))
    else:
        results.append(("Internal links", "WARNING", f"{internal} (SPA adds more via JS)"))

    # Paragraphs
    ps = re.findall(r"<p[^>]*>", html, re.I)
    if ps:
        results.append(("Paragraphs", "OK", f"{len(ps)} <p> tags"))
    else:
        results.append(("Paragraphs", "WARNING", "No <p> in initial HTML (content in JS)"))

    print_results(results)
    print("\n--- Local files ---")
    print_results(check_local_files())


def main():
    parser = argparse.ArgumentParser(description="SEO check for therapy site")
    parser.add_argument("url", nargs="?", default=DEFAULT_URL, help="Base URL to check")
    parser.add_argument("--local", action="store_true", help="Check only local files (no pip install needed)")
    args = parser.parse_args()

    if args.local:
        run_local_checks()
    else:
        if not HAS_DEPS:
            print("For URL check, install: pip install -r requirements-seo.txt")
            print("Or use --local to check local files without deps.")
            sys.exit(1)
        run_url_checks(args.url)


if __name__ == "__main__":
    main()
