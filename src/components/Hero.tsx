import React, { useRef } from 'react';

const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="hero video-hero-section"
        >
            <div className="video-hero-section__overlay" aria-hidden />
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="hero-name">Najat KOBI</span>
                    <span className="hero-job">Thérapeute de couple</span>
                </h1>
                <a href="#contact" className="btn-primary hero-btn">Prendre rendez-vous</a>
            </div>
        </section>
    );
};

export default Hero;
