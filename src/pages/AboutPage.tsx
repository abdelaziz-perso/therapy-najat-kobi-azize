import React, { useEffect, useRef } from 'react';
import portraitStanding from '../assets/full-shot-psychologist-her-office.jpg'; // Using existing for now
import portraitSitting from '../assets/full-shot-psychologist-her-office.jpg'; // Using existing for now
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
            {/* Capture 1: Simple Hero */}
            <section className="about-hero">
                <div className="container about-hero-content">
                    <h1>Najat KOBI</h1>
                    <p ref={addToRefs}>Thérapeute de couple,<br />en ligne et à Casablanca</p>
                </div>
            </section>

            {/* Capture 2: Qui suis-je Detail 1 */}
            <section className="about-detail-section" ref={addToRefs}>
                <div className="container about-detail-container">
                    <div className="about-detail-text">
                        <h2 className="section-label">Qui suis-je ?</h2>
                        <h3>Najat Kobi, thérapeute de couple.</h3>
                        <p>
                            Spécialisée dans l'accompagnement des couples, j'ai aidé de nombreux duos à surmonter leurs défis et à retrouver une harmonie relationnelle. Mon parcours m'a amenée à me concentrer exclusivement sur les dynamiques de couple, car je crois fermement que la qualité de nos relations définit la qualité de notre vie.
                        </p>
                        <p className="bold-text">Nous pouvons vous aider aussi.</p>
                        <p>
                            Je sais que traverser une crise conjugale ou des tensions répétées peut être épuisant. C'est pourquoi je suis là : pour vous offrir le soutien et les stratégies dont votre couple a besoin pour se reconstruire.
                        </p>
                        <p>
                            Notre approche repose sur la Thérapie d'Acceptation et d'Engagement (ACT), intégrée à d'autres méthodes basées sur la science, afin de proposer un accompagnement personnalisé et bienveillant. Nous avons également participé à des missions humanitaires pour soutenir des communautés touchées par des traumatismes et des crises.
                        </p>
                    </div>
                    <div className="about-detail-image">
                        <img src={portraitStanding} alt="Najat Kobi - Thérapeute de couple" />
                    </div>
                </div>
            </section>

            {/* Capture 3: Mission & Values (Dark Background) */}
            <section className="mission-section" ref={addToRefs}>
                <div className="container mission-container">
                    <div className="mission-text">
                        <p>
                            J’ai eu le privilège de collaborer avec des organisations sur des missions humanitaires, allant du soutien à la guérison des enfants et des adolescents à l’autonomisation des femmes victimes de violence.
                        </p>
                        <p>
                            Je suis également très active au sein d’organisations de jeunesse, contribuant à façonner la société marocaine, en animant des ateliers et en créant du contenu pour sensibiliser à l’importance de la santé mentale.
                        </p>
                        <h4 className="mission-subtitle">MA MISSION ET MES VALEURS :</h4>
                        <p>
                            Authenticité, clarté et flexibilité sont mes valeurs professionnelles, qui m’aideront dans ma mission d'accompagnement de toute personne en quête de sens, en transition de vie, et/ou en souffrance vers une vie plus alignée, une vie pleine de sens
                        </p>
                    </div>
                    <div className="mission-image">
                        <img src={portraitSitting} alt="Najat Kobi en séance" />
                    </div>
                </div>
            </section>

            {/* Capture 4: Mon parcours */}
            <section className="parcours-section" ref={addToRefs}>
                <div className="container">
                    <h2 className="parcours-title">Mon parcours :</h2>
                    <div className="parcours-grid">
                        <div className="parcours-item">
                            <div className="parcours-icon">
                                <i className="fas fa-scroll"></i>
                            </div>
                            <div className="parcours-content">
                                <h5>Formation universitaire</h5>
                                <p>
                                    Diplômée d'une licence en psychologie générale de l'Université internationale de Casablanca, et d'un master en psychologie clinique et psychopathologie de la faculté des lettres et des sciences humaines Mohammedia.
                                </p>
                            </div>
                        </div>
                        <div className="parcours-item">
                            <div className="parcours-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <div className="parcours-content">
                                <h5>Spécialisation en thérapie de couple</h5>
                                <p>
                                    Formation intensive certifiée à l'IMPR, spécialisation systémique à l'IFACT de Lyon, et maîtrise de la méthode Gottman ainsi que de la thérapie conjugale positive.
                                </p>
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
