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
                    <h2 className="appointment-title">Prendre rendez-vous</h2>
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
                            <a href="#" className="location-link">LOCALISATION ICI</a>
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
