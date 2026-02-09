import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import psychologistImg from '../assets/full-shot-psychologist-her-office.jpg';

const AboutMeSection: React.FC = () => {
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
        <section ref={sectionRef} id="a-propos" className="about-me-section">
            <div className="container about-me-container">
                <div className="about-me-text">
                    <h2 className="about-title">Qui suis-je ?</h2>
                    <h3 className="about-subtitle">Najat Kobi, thérapeute de couple, à Casablanca</h3>
                    <p className="about-description">
                        Spécialisée dans l'accompagnement des couples, je vous aide à naviguer à travers les défis relationnels,
                        à restaurer la communication et à reconstruire des liens solides. Que vous traversiez une crise,
                        un tsunami conjugal ou que vous souhaitiez simplement renforcer votre complicité, je vous offre un espace
                        sécurisant pour explorer votre dynamique de couple et retrouver une harmonie durable.
                    </p>
                    <Link to="/a-propos" className="btn-dark">voir plus</Link>
                </div>

                <div className="about-me-image">
                    <img src={psychologistImg} alt="Najat Kobi - Thérapeute de couple" loading="lazy" decoding="async" />
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
