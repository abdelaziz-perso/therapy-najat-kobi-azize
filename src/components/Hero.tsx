import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="hero-name">Najat Kobi</span>
                    <span className="hero-job">thérapeute de couple</span>
                </h1>
                <a href="#contact" className="btn-primary hero-btn">Prendre rendez-vous</a>
            </div>
        </section>
    );
};

export default Hero;
