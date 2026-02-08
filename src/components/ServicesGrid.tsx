import React from 'react';
import imgAdolescent from '../assets/authentic-scene-young-person-undergoing-psychological-therapy.jpg';
import imgEnfant from '../assets/close-up-girl-therapy-session-with-parents.jpg';
import imgAdulte from '../assets/depressed-woman-having-psychotherapy-session-doctor-s-office.jpg';
import imgBilan from '../assets/close-up-psychologist-taking-notes-clipboard-therapy-session-with-her-worried-patient-psychology-mental-health-concept.jpg';

import imgCouple from '../assets/medium-shot-couple-therapy.jpg';

const ServicesGrid: React.FC = () => {
    const services = [
        { type: 'image', src: imgAdolescent, alt: 'Adolescent therapy' },
        {
            type: 'text',
            title: 'Thérapie pour adolescent',
            desc: "L'adolescence est une période de transition complexe. Nous accompagnons les jeunes face aux défis de l'identité, de l'anxiété sociale, des pressions scolaires et des difficultés relationnelles pour les aider à s'épanouir sereinement."
        },
        { type: 'image', src: imgEnfant, alt: 'Child therapy' },
        {
            type: 'text',
            title: 'Thérapie enfant',
            desc: 'À travers le jeu et des approches créatives, nous aidons les enfants à exprimer leurs émotions, à surmonter leurs peurs et à gérer les changements familiaux, favorisant ainsi un développement affectif sain.'
        },
        {
            type: 'text',
            title: 'Thérapie pour adulte',
            desc: 'Que vous traversiez une période de stress intense, un deuil ou des difficultés personnelles, nous vous offrons un espace sécurisant pour explorer vos émotions, retrouver un équilibre et développer de nouvelles ressources face aux épreuves.'
        },
        { type: 'image', src: imgAdulte, alt: 'Adult therapy' },
        {
            type: 'text',
            title: 'Bilan neuropsychologique',
            desc: "Une évaluation approfondie des fonctions cognitives (mémoire, attention, fonctions exécutives) pour mieux comprendre le fonctionnement cérébral, identifier d'éventuels troubles et proposer des solutions adaptées."
        },
        { type: 'image', src: imgBilan, alt: 'Neuropsychological assessment' },
        {
            type: 'featured',
            title: 'Pourquoi la thérapie de couple ?',
            content: (
                <div className="featured-content">
                    <p>J’ai été biberonnée aux comédies romantiques et aux contes de fées. Comme beaucoup de jeunes filles de ma génération j’étais amoureuse de l’amour. Les choses semblaient simples : on rencontrait quelqu’un on tombait amoureux et on vivait heureux. Je n’étais pas stupide, je savais qu’il y aurait des obstacles, des crises…Mais à la fin l’amour triomphe toujours ! C’est ce que j’avais appris auprès de Cendrillon et de Maria (la mélodie du bonheur).</p>
                    <p>Deux décennies plus tard, je me retrouve en plein tsunami conjugal (pas du tout prévu dans le plan de vie) à la recherche d’un thérapeute pour sauver mon couple. J’étais en train de finir ma formation de thérapeute ACP (Approche centrée sur la personne de Carl Rogers) et j’étais convaincue par la démarche thérapeutique. Pour nous, il était trop tard, mais cette rencontre m’a permis de choisir ma spécialité : je serai thérapeute de couple.</p>
                    <p>J’aime le couple. J’ai une affection particulière pour vous qui venez me consulter. Je me sens honorée que vous partagiez avec moi votre intimité. Je suis admirative de l’énergie que vous mettez à rester ensemble. Pour vous être utile, vous qui me faites confiance, j’ai multiplié les formations pour avoir un maximum d’outils pour vous aider :</p>
                    <ul className="certifications-list">
                        <li>Certifié thérapeute à l’IMPR (Institut marocain de psychothérapie relationnelle)</li>
                        <li>Certifié thérapeute de couple systémique par l’IFACT de Lyon (Institut de formation et d’application des thérapies de la communication)</li>
                        <li>Formation en Thérapie conjugale positive auprès d’Yvon Dellaire</li>
                        <li>Formation à la méthode Gottman, qui pour moi est le dieu de la thérapie de couple !</li>
                    </ul>
                    <p>Et évidemment je n’ai pas l’intention de m’arrêter en si bon chemin, quand on aime on ne compte pas !</p>
                </div>
            )
        },
        { type: 'image', src: imgCouple, alt: 'Couple therapy', className: 'couple-img' }
    ];

    return (
        <section id="services" className="services-grid-section">
            <div className="container">
                <h2 className="services-grid-title">Quel type de service est le mieux adapté pour vous ?</h2>
                <div className="services-grid">
                    {services.map((item, index) => {
                        if (item.type === 'featured') {
                            return (
                                <div key={index} className="grid-item featured-item">
                                    <div className="text-card featured-card">
                                        <h3>{item.title}</h3>
                                        {item.content}
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <div key={index} className={`grid-item ${item.type}-item ${item.className || ''}`}>
                                {item.type === 'image' ? (
                                    <img src={item.src} alt={item.alt} />
                                ) : (
                                    <div className="text-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
