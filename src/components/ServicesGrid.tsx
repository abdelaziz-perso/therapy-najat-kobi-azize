import React from 'react';
import imgCouple from '../assets/smiling-couple.png';

const ServicesGrid: React.FC = () => {
    return (
        <section id="services" className="services-redesign">
            {/* Premium Story Section for Couple Therapy - Now the main focus */}
            <div className="story-section-wrapper">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content-side">
                            <h2 className="story-title">Pourquoi la thérapie de couple{"\u00A0"}?</h2>
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
