import React from 'react';
import imgAdolescent from '../assets/authentic-scene-young-person-undergoing-psychological-therapy.jpg';
import imgEnfant from '../assets/close-up-girl-therapy-session-with-parents.jpg';
import imgAdulte from '../assets/depressed-woman-having-psychotherapy-session-doctor-s-office.jpg';
import imgBilan from '../assets/close-up-psychologist-taking-notes-clipboard-therapy-session-with-her-worried-patient-psychology-mental-health-concept.jpg';
import imgCouple from '../assets/therapie_couple.jpg';

const ServicesGrid: React.FC = () => {
    const services = [
        {
            title: 'Thérapie adolescent',
            desc: "Un accompagnement bienveillant pour traverser les défis de l'adolescence, l'anxiété et les transitions scolaires.",
            src: imgAdolescent,
            tag: 'ÉCOUTE'
        },
        {
            title: 'Thérapie enfant',
            desc: "À travers le jeu et la créativité, nous aidons les plus jeunes à exprimer leurs émotions et grandir sereinement.",
            src: imgEnfant,
            tag: 'DÉVELOPPEMENT'
        },
        {
            title: 'Thérapie adulte',
            desc: "Un espace sécurisant pour explorer vos émotions, surmonter le stress et retrouver votre équilibre intérieur.",
            src: imgAdulte,
            tag: 'BIEN-ÊTRE'
        },
        {
            title: 'Bilan neuropsychologique',
            desc: "Évaluation approfondie de la mémoire et de l'attention pour mieux comprendre votre fonctionnement cognitif.",
            src: imgBilan,
            tag: 'ANALYSE'
        }
    ];

    return (
        <section id="services" className="services-redesign">
            <div className="container">
                <div className="services-header-modern">
                    <span className="services-badge">NOS SOLUTIONS</span>
                    <h2 className="services-main-title">Comment puis-je vous aider ?</h2>
                    <p className="services-subtitle">Des approches adaptées à chaque étape de votre vie</p>
                </div>

                <div className="modern-services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="modern-service-card">
                            <div className="card-image-wrapper">
                                <img src={service.src} alt={service.title} loading="lazy" decoding="async" />
                                <span className="card-tag">{service.tag}</span>
                            </div>
                            <div className="card-info">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <a href="#contact" className="card-link">En savoir plus <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Story Section for Couple Therapy */}
            <div className="story-section-wrapper">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content-side">
                            <span className="story-label">MA SPÉCIALITÉ</span>
                            <h2 className="story-title">Pourquoi la thérapie de couple ?</h2>
                            <div className="story-text-rich">
                                <p>J’ai été biberonnée aux comédies romantiques et aux contes de fées. Les choses semblaient simples : on rencontrait quelqu’un on tombait amoureux et on vivait heureux.</p>
                                <p>Deux décennies plus tard, je me retrouve en plein tsunami conjugal à la recherche d’un thérapeute pour sauver mon couple. Pour nous, il était trop tard, mais cette rencontre m’a permis de choisir ma spécialité : je serai thérapeute de couple.</p>
                                <p>J’aime le couple. J’ai une affection particulière pour vous qui venez me consulter. Je suis honorée que vous partagiez avec moi votre intimité. Pour vous être utile, j’ai multiplié les formations :</p>

                                <ul className="modern-cert-list">
                                    <li><i className="fas fa-check-circle"></i> Certifié thérapeute à l’IMPR</li>
                                    <li><i className="fas fa-check-circle"></i> Certifié systémique par l’IFACT de Lyon</li>
                                    <li><i className="fas fa-check-circle"></i> Méthode Gottman & Thérapie conjugale positive</li>
                                </ul>

                                <blockquote className="story-quote">
                                    "Quand on aime on ne compte pas, et j'ai l'intention de continuer à me former pour vous."
                                </blockquote>
                            </div>
                        </div>
                        <div className="story-image-side">
                            <div className="story-img-container">
                                <img src={imgCouple} alt="Thérapie de couple" loading="lazy" decoding="async" />
                                <div className="img-decoration-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
