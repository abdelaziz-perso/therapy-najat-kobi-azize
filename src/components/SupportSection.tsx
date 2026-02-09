import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgLarge from '../assets/authentic-scene-young-person-undergoing-psychological-therapy.jpg';
import imgTopRight from '../assets/medium-shot-couple-therapy.jpg';
import imgBottomRight from '../assets/close-up-girl-therapy-session-with-parents.jpg';

const SupportSection: React.FC = () => {
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
        <section ref={sectionRef} className="support-section">
            <div className="container support-container">
                <div className="support-text">
                    <p className="support-description">
                        Traverser une crise dans son couple, ressentir une déconnexion profonde ou faire face à des
                        conflits incessants peut être extrêmement isolant. Vous n'êtes pas seuls dans ce combat pour
                        sauver votre relation.
                    </p>
                    <p className="support-list-intro">
                        De nombreux couples consultent pour :
                    </p>
                    <ul className="support-list">
                        <li>Crises de confiance et infidélité</li>
                        <li>Problèmes de communication et cercles vicieux</li>
                        <li>Désaccord sur l'éducation des enfants</li>
                        <li>Tensions avec la belle-famille</li>
                        <li>Baisse de la libido et routine sexuelle</li>
                        <li>Épuisement parental et impact sur le couple</li>
                        <li>Transitions de vie (naissance, retraite, déménagement)</li>
                        <li>Sentiment de solitude à deux</li>
                        <li>Incertitude sur l'avenir de la relation</li>
                    </ul>
                    <p className="support-cta">
                        <Link to="/a-propos">Mon approche pour vous</Link>
                        {' · '}
                        <a href="/#contact">Prendre rendez-vous</a>
                    </p>
                </div>

                <div className="support-images">
                    <div className="image-large">
                        <img src={imgLarge} alt="Couple en discussion constructive" loading="lazy" decoding="async" />
                    </div>
                    <div className="image-stack">
                        <div className="image-small">
                            <img src={imgTopRight} alt="Thérapie de couple" loading="lazy" decoding="async" />
                        </div>
                        <div className="image-small">
                            <img src={imgBottomRight} alt="Accompagnement de couple" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
