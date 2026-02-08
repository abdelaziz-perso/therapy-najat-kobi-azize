import React, { useEffect, useRef } from 'react';
import seaboat from '../assets/seaboat1.jpg';
import portraitStanding from '../assets/full-shot-psychologist-her-office.jpg'; // Using existing for now
import portraitSitting from '../assets/full-shot-psychologist-her-office.jpg'; // Using existing for now
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentSection from '../components/AppointmentSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const AboutPage: React.FC = () => {
    const fadeRefs = useRef<Array<HTMLElement | null>>([]);

    useEffect(() => {
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

        fadeRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            fadeRefs.current.forEach((ref) => {
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
            <section
                className="about-hero"
                style={{ backgroundImage: `url(${seaboat})` }}
            >
                <div className="hero-overlay"></div>
                <div className="container about-hero-content">
                    <h1 ref={addToRefs}>Najat KOBI</h1>
                    <p ref={addToRefs}>Psychologue et psychothérapeute,<br />en ligne and à Casablanca</p>
                </div>
            </section>

            {/* Capture 2: Qui suis-je Detail 1 */}
            <section className="about-detail-section" ref={addToRefs}>
                <div className="container about-detail-container">
                    <div className="about-detail-text">
                        <h2 className="section-label">Qui suis-je ?</h2>
                        <h3>Najat Kobi, psychologue clinicienne et psychothérapeute.</h3>
                        <p>
                            Avec plusieurs années d'expérience en psychothérapie, nous avons aidé de nombreuses personnes à surmonter leurs défis et à retrouver un bien-être émotionnel. Nous avons accompagné des individus souffrant d'anxiété, de dépression, de traumatismes, d'épuisement professionnel en leur offrant un chemin vers la guérison lorsqu'ils se sentaient perdus. Nous avons également soutenu des personnes confrontées au deuil, aux difficultés relationnelles, aux difficultés scolaires et aux grandes transitions de vie.
                        </p>
                        <p className="bold-text">Nous pouvons vous aider aussi.</p>
                        <p>
                            Nous savons que gérer sa santé mentale peut sembler difficile, quel que soit l’âge. C’est pourquoi nous sommes là : pour vous offrir le soutien, les soins et les stratégies dont vous avez besoin.
                        </p>
                        <p>
                            Notre approche repose sur la Thérapie d'Acceptation et d'Engagement (ACT), intégrée à d'autres méthodes basées sur la science, afin de proposer un accompagnement personnalisé et bienveillant. Nous avons également participé à des missions humanitaires pour soutenir des communautés touchées par des traumatismes et des crises.
                        </p>
                    </div>
                    <div className="about-detail-image">
                        <img src={portraitStanding} alt="Meryem Abouhafs" />
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
                        <img src={portraitSitting} alt="Meryem Abouhafs en consultation" />
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
                                <h5>formations complementaires</h5>
                                <p>
                                    Formation en thérapie ACT (thérapie d'acceptation et d'engagement), psychwire and openforwards. Formation en tests projectives et neuropsychologiques, psychologia institute.
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
