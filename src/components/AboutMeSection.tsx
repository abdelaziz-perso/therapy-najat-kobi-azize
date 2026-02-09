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
                    <h3 className="about-subtitle">Najat Kobi, psychologue clinicienne et psychothérapeute, à Casablanca</h3>
                    <p className="about-description">
                        Avec plusieurs années d'expérience en psychothérapie, nous avons aidé de nombreuses personnes à surmonter leurs défis et à
                        retrouver un bien-être émotionnel. Nous avons accompagné des individus souffrant d'anxiété, de dépression, de traumatismes,
                        d'épuisement professionnel en leur offrant un chemin vers la guérison lorsqu'ils se sentaient perdus. Nous avons également soutenu
                        des personnes confrontées au deuil, aux difficultés relationnelles, aux difficultés scolaires et aux grandes transitions de vie.
                    </p>
                    <Link to="/a-propos" className="btn-dark">voir plus</Link>
                </div>

                <div className="about-me-image">
                    <img src={psychologistImg} alt="Meryem Abouhafs" loading="lazy" decoding="async" />
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
