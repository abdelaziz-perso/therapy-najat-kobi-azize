import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Najat Kobi Therapy Practice Logo.png';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo-circle">
                    <Link to="/">
                        <img src={logo} alt="Najat Kobi Therapy Practice Logo" />
                    </Link>
                </div>

                <ul className="nav-links">
                    <li><Link to="/" className={isHome ? "active" : ""}>Accueil</Link></li>
                    <li><Link to="/a-propos" className={location.pathname === '/a-propos' ? "active" : ""}>A propos</Link></li>
                    <li><Link to="/#deroulement" onClick={(e) => handleLinkClick(e as any, 'deroulement')}>Déroulement</Link></li>
                    <li><Link to="/#services" onClick={(e) => handleLinkClick(e as any, 'services')}>consultations</Link></li>
                    <li><Link to="/#contact" onClick={(e) => handleLinkClick(e as any, 'contact')}>Prendre RDV</Link></li>
                </ul>

                <div className="social-icons">
                    <a href="https://www.instagram.com/kobi.najat/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
