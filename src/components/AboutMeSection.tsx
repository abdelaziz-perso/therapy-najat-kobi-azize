import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import psychologistImg from '../assets/najat-photo-04.jpeg';

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
                    <h2 className="about-title">Pourquoi j'ai choisi le couple ?</h2>
                    <p className="about-description">
                        J'ai été biberonnée aux comédies romantiques et aux contes de fées. Comme beaucoup de jeunes filles de ma génération j'étais amoureuse de l'amour. Les choses semblaient simples : on rencontrait quelqu'un on tombait amoureux et on vivait heureux. Je n'étais pas stupide, je savais qu'il y aurait des obstacles, des crises… Mais à la fin l'amour triomphe toujours ! C'est ce que j'avais appris auprès de Cendrillon et de Maria (la mélodie du bonheur).
                    </p>
                    <p className="about-description">
                        Deux décennies plus tard, je me retrouve en plein tsunami conjugal (pas du tout prévu dans le plan de vie) à la recherche d'un thérapeute pour sauver mon couple. J'étais en train de finir ma formation de thérapeute ACP (Approche centrée sur la personne de Carl Rogers) et j'étais convaincue par la démarche thérapeutique. Pour nous, il était trop tard, mais cette rencontre m'a permis de choisir ma spécialité : je serai thérapeute de couple.
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
