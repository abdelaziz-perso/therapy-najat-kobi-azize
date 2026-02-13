import React from 'react';
import contactBg from '../assets/doctor-offering-medical-teleconsultation.jpg';

const ContactSection: React.FC = () => {
    return (
        <section id="coordonnees" className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="contact-overlay"></div>
            <div className="container contact-container">
                <div className="contact-header">
                    <span className="contact-label">CONTACT</span>
                </div>

                <div className="contact-card contact-card--info-only">
                    <div className="contact-info-side contact-info-two-cols">
                        <div className="contact-block contact-block--reach">
                            <div className="contact-info-header">
                                <h3 className="contact-info-title">Prendre rendez-vous</h3>
                                <p className="contact-info-intro">Par téléphone ou par mail</p>
                            </div>
                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">TEL</span>
                                        <a href="tel:+212661338197" className="info-value">06.61.33.81.97</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">MAIL</span>
                                        <a href="mailto:najatkobi7@gmail.com" className="info-value">najatkobi7@gmail.com</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">INSTA</span>
                                        <a href="https://www.instagram.com/kobi.najat/" target="_blank" rel="noopener noreferrer" className="info-value">kobi.najat</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">HORAIRES</span>
                                        <span className="info-value info-hours">
                                            Lundi 10h–20h · Mardi 10h–20h · Mercredi 10h–20h · Jeudi 10h–20h · Vendredi 10h–20h · Samedi 10h–14h · Dimanche fermé
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-block contact-block--place">
                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ADRESSE</span>
                                    <span className="info-value">Lotissement Arsat Lakbir, immeuble 16 au noble étage 5 appartement 23</span>
                                </div>
                            </div>
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.015120109924!2d-7.646187500000001!3d33.5771875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd14f48a9011%3A0x7b92e3999875894a!2sNajat%20Kobi%20%E2%80%93%20Th%C3%A9rapie%20Conjugale%20%C3%A0%20Casablanca!5e1!3m2!1sen!2sma!4v1770743370994!5m2!1sen!2sma"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Najat Kobi – Thérapie Conjugale à Casablanca"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wavy-divider">
                <svg viewBox="0 0 1440 120" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default ContactSection;
