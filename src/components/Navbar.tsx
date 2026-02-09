import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Najat Kobi Therapy Practice Logo.png';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        setIsMenuOpen(false);
        if (isHome) {
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container navbar-content">
                <div className="logo-circle">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <img src={logo} alt="Najat Kobi Therapy Practice Logo" fetchPriority="high" />
                    </Link>
                </div>

                <div className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className={isHome ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
                    <li><Link to="/a-propos" className={location.pathname === '/a-propos' ? "active" : ""} onClick={() => setIsMenuOpen(false)}>A propos</Link></li>
                    <li><Link to="/#deroulement" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'deroulement')}>Déroulement</Link></li>
                    <li><Link to="/#services" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'services')}>consultations</Link></li>
                    <li><Link to="/#contact" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'contact')}>Prendre RDV</Link></li>
                </ul>

                <div className={`social-icons ${isMenuOpen ? 'active' : ''}`}>
                    <a href="https://www.instagram.com/kobi.najat/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </nav>
    );
};

export default Navbar;
