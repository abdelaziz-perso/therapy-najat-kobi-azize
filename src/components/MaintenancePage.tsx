import React from 'react';
import logo from '../assets/Najat Kobi Therapy Practice Logo.png';

const MaintenancePage: React.FC = () => {
  return (
    <div className="maintenance-page">
      <div className="maintenance-content">
        <div className="maintenance-logo">
          <img src={logo} alt="Najat Kobi - Thérapeute de couple" />
        </div>
        <h1 className="maintenance-title">Najat KOBI</h1>
        <p className="maintenance-subtitle">Thérapeute de couple</p>
        <div className="maintenance-message">
          <h2>Maintenance en cours</h2>
          <p>Notre site est temporairement indisponible pour une mise à jour. Nous serons de retour très bientôt.</p>
          <p className="maintenance-contact">Pour toute urgence : <a href="tel:+212661338197">06.61.33.81.97</a></p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
