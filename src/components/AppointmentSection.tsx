import React, { useEffect, useRef } from 'react';

const AppointmentSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            },
            { threshold: 0.2 }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="appointment-section">
            <div className="container">
                <div className="appointment-header">
                    <div className="sparkles">
                        <i className="fas fa-sparkles"></i>
                        <i className="fas fa-wand-magic-sparkles"></i>
                    </div>
                    <h2 className="appointment-title">Prendre rdv</h2>
                    <p className="appointment-subtitle">
                        Je vous propose différents espaces de rencontres, en présence ou à distance.
                    </p>
                </div>

                <div className="appointment-cards">
                    <div className="appointment-card online-card">
                        <div className="card-icon-box">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <h3>En ligne</h3>
                        <div className="card-divider"></div>
                        <p>
                            Peu importe votre localisation dans le monde, vous pouvez prendre rendez-vous lundi, mardi, mercredi, jeudi et samedi entre 10h et 17h.
                        </p>
                        <div className="card-divider"></div>
                    </div>

                    <div className="appointment-card cabinet-card">
                        <div className="card-icon-box">
                            <i className="fas fa-location-dot"></i>
                        </div>
                        <h3>Au cabinet</h3>
                        <div className="card-divider"></div>
                        <div className="cabinet-info">
                            <p>Le cabinet est situé au Lotissemebt Arsat Lakbir, immeuble 16 le noble Etage 5 appartement 23.</p>
                            <div className="cabinet-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.015120109924!2d-7.646187500000001!3d33.5771875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd14f48a9011%3A0x7b92e3999875894a!2sNajat%20Kobi%20%E2%80%93%20Th%C3%A9rapie%20Conjugale%20%C3%A0%20Casablanca!5e1!3m2!1sen!2sma!4v1770743370994!5m2!1sen!2sma"
                                    width="400"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Najat Kobi – Thérapie Conjugale à Casablanca"
                                />
                            </div>
                            <p>
                                Vous pouvez prendre rendez-vous lundi, mardi, mercredi, jeudi et samedi entre 10h et 17h.
                            </p>
                        </div>
                        <div className="card-divider"></div>
                    </div>
                </div>

                <div className="appointment-footer">
                    <a href="#contact" className="btn-outline">Prendre RDV</a>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
