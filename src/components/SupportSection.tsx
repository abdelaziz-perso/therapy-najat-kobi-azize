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
                    <h2 className="support-title">Nous sommes là pour vous aider</h2>
                    <p className="support-description">
                        Avez-vous déjà ressenti un profond découragement face à vos difficultés,
                        une incertitude quant à vos prochaines étapes, et une anxiété quant à
                        votre capacité à affronter les défis à venir ? Vous n'êtes pas seul(e).
                    </p>
                    <p className="support-list-intro">
                        À travers le monde, de nombreuses personnes souffrent de :
                    </p>
                    <ul className="support-list">
                        <li>Dépression</li>
                        <li>Pression pour répondre aux attentes des autres</li>
                        <li>Épuisement professionnel (burnout)</li>
                        <li>Incertitude professionnelle</li>
                        <li>Problèmes relationnels</li>
                        <li>Difficultés scolaires</li>
                        <li>Déséquilibre entre vie professionnelle et personnelle</li>
                        <li>Anxiété liée à la santé</li>
                        <li>Manque de sens ou de direction</li>
                        <li>Sentiment de déconnexion avec les proches</li>
                        <li>Anxiété liée aux études</li>
                    </ul>
                    <p className="support-cta">
                        <Link to="/a-propos">Découvrez notre approche</Link>
                        {' · '}
                        <a href="/#contact">Prendre rendez-vous</a>
                    </p>
                </div>

                <div className="support-images">
                    <div className="image-large">
                        <img src={imgLarge} alt="Séance de thérapie individuelle" loading="lazy" decoding="async" />
                    </div>
                    <div className="image-stack">
                        <div className="image-small">
                            <img src={imgTopRight} alt="Thérapie de couple" loading="lazy" decoding="async" />
                        </div>
                        <div className="image-small">
                            <img src={imgBottomRight} alt="Thérapie familiale" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
