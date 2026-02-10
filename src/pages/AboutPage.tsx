import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import portraitImg from '../assets/full-shot-psychologist-her-office.jpg';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentSection from '../components/AppointmentSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const AboutPage: React.FC = () => {
    const fadeRefs = useRef<Array<HTMLElement | null>>([]);

    useEffect(() => {
        const refs = fadeRefs.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        refs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !fadeRefs.current.includes(el)) {
            fadeRefs.current.push(el);
        }
    };

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container about-hero-content">
                    <h1>Najat KOBI</h1>
                    <p ref={addToRefs}>Thérapeute de couple</p>
                    <Link to="/#contact" className="btn-primary" style={{ marginTop: '1rem' }}>Prendre RDV</Link>
                </div>
            </section>

            <section className="about-detail-section" ref={addToRefs}>
                <div className="container about-detail-container">
                    <div className="about-detail-text">
                        <h2 className="section-label">Pourquoi j'ai choisi le couple ?</h2>
                        <p>
                            J'ai été biberonnée aux comédies romantiques et aux contes de fées. Comme beaucoup de jeunes filles de ma génération j'étais amoureuse de l'amour. Les choses semblaient simples : on rencontrait quelqu'un on tombait amoureux et on vivait heureux. Je n'étais pas stupide, je savais qu'il y aurait des obstacles, des crises… Mais à la fin l'amour triomphe toujours ! C'est ce que j'avais appris auprès de Cendrillon et de Maria (la mélodie du bonheur).
                        </p>
                        <p>
                            Deux décennies plus tard, je me retrouve en plein tsunami conjugal (pas du tout prévu dans le plan de vie) à la recherche d'un thérapeute pour sauver mon couple. J'étais en train de finir ma formation de thérapeute ACP (Approche centrée sur la personne de Carl Rogers) et j'étais convaincue par la démarche thérapeutique. Pour nous, il était trop tard, mais cette rencontre m'a permis de choisir ma spécialité : je serai thérapeute de couple.
                        </p>
                        <p>
                            J'aime le couple. J'ai une affection particulière pour vous qui venez me consulter. Je me sens honorée que vous partagiez avec moi votre intimité. Je suis admirative de l'énergie que vous mettez à rester ensemble. Pour vous être utile, vous qui me faites confiance, j'ai multiplié les formations pour avoir un maximum d'outils pour vous aider :
                        </p>
                        <ul className="about-formations-list">
                            <li>Certifié thérapeute à l'IMPR (Institut marocain de psychothérapie relationnelle)</li>
                            <li>Certifié thérapeute de couple systémique par l'IFACT de Lyon (Institut de formation et d'application des thérapies de la communication)</li>
                            <li>Formation en Thérapie conjugale positive auprès d'Yvon Dellaire</li>
                            <li>Formation à la méthode Gottman, qui pour moi est le dieu de la thérapie de couple !</li>
                        </ul>
                        <p>Et évidemment je n'ai pas l'intention de m'arrêter en si bon chemin, quand on aime on ne compte pas !</p>
                    </div>
                    <div className="about-detail-image">
                        <img src={portraitImg} alt="Najat Kobi - Thérapeute de couple" loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>

            <section className="about-deroulement-section" ref={addToRefs}>
                <div className="container">
                    <h2 className="section-label">Comment se déroule une thérapie de couple ?</h2>
                    <div className="process-steps-list">
                        <div className="process-step-card">
                            <div className="step-number-circle">1</div>
                            <div className="step-card-content">
                                <h3>Première séance (environ 1h30)</h3>
                                <p>Je reçois les conjoints ensemble pour une première séance qui dure à peu près 1h30. J'apprends à vous connaitre individuellement puis ensuite je m'intéresse à mon vrai client qui est votre couple.</p>
                            </div>
                        </div>
                        <div className="process-step-card">
                            <div className="step-number-circle">2</div>
                            <div className="step-card-content">
                                <h3>Séances suivantes</h3>
                                <p>Les séances suivantes sont sensiblement plus courtes mais elles se font toujours à 3. Il est très rare que je prenne individuellement les conjoints, et même si c'est le cas, c'est en général pour une seule séance.</p>
                            </div>
                        </div>
                        <div className="process-step-card">
                            <div className="step-number-circle">3</div>
                            <div className="step-card-content">
                                <h3>Durée de la thérapie</h3>
                                <p>La thérapie de couple est une thérapie brève, elle dure rarement plus de 10 ou 12 séances.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection />
            <AppointmentSection />
            <FAQSection />
            <ContactSection />
        </div>
    );
};

export default AboutPage;
