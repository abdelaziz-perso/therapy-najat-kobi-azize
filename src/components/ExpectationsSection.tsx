import React from 'react';

const ExpectationsSection: React.FC = () => {
    const items = [
        { icon: 'fa-wand-magic-sparkles', text: 'en clarté' },
        { icon: 'fa-location-arrow', text: 'En sérénité' },
        { icon: 'fa-screwdriver-wrench', text: 'En ressources' },
        { icon: 'fa-users', text: 'liens authentiques' },
    ];

    return (
        <section className="expectations-section">
            <div className="container">
                <h3 className="expectations-subtitle">À quoi s'attendre :</h3>
                <p className="expectations-desc">
                    La thérapie de couple offre un espace sûr pour la guérison relationnelle et la redécouverte de votre dynamique.
                </p>

                <div className="expectations-grid">
                    {items.map((item, index) => (
                        <div key={index} className="expectation-item">
                            <div className="icon-box">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <span className="expectation-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="wavy-bottom">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    );
};

export default ExpectationsSection;
