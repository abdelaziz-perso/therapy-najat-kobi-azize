# Si le site renvoie 403 Forbidden (najatkobi-therapie.ma)

Ce dépôt contient déjà :
- **public/.htaccess** : `DirectoryIndex index.html`, pas de blocage, fallback SPA.
- **public/robots.txt** : `Allow: /` pour les robots.

Si le 403 persiste, la cause est en général **côté hébergeur Hostinger**.

## À vérifier dans hPanel (Hostinger)

1. **Sécurité / ModSecurity**
   - Aller dans **Sécurité** (ou **Security**).
   - Désactiver temporairement **« Block bad bots »** (ou équivalent) pour tester, ou ajouter une exception pour votre domaine.

2. **Permissions des fichiers**
   - Dossier de déploiement : **755**.
   - Fichiers (dont `index.html`, `.htaccess`) : **644**.

3. **Racine du site**
   - Vérifier que le répertoire de déploiement FTP (celui indiqué dans les secrets GitHub) est bien la **racine du domaine** (ex. `public_html` pour najatkobi-therapie.ma), pour que `index.html` et `.htaccess` soient à la racine.

4. **Test en navigation privée**
   - Ouvrir https://najatkobi-therapie.ma/ en navigation privée (sans VPN) pour écarter un blocage lié à l’IP ou aux cookies.

Après modification dans hPanel, attendre quelques minutes et réessayer. Si le 403 ne vient pas de « Block bad bots », le support Hostinger pourra vérifier les règles ModSecurity ou pare-feu pour votre hébergement.
