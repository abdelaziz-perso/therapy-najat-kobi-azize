import React, { useRef } from 'react';

const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="hero hero--logo-style">
            <div className="hero-bg-shape hero-bg-shape--1" aria-hidden />
            <div className="hero-bg-shape hero-bg-shape--2" aria-hidden />
            <div className="hero-bg-shape hero-bg-shape--3" aria-hidden />
            <div className="hero-bg-shape hero-bg-shape--4" aria-hidden />
            <div className="hero-bg-shape hero-bg-shape--5" aria-hidden />

            <div className="container hero-content">
                <div className="hero-branding">
                    <h1 className="hero-branding__name">Najat Kobi</h1>
                    <p className="hero-branding__tagline">Thérapeute de couple</p>
                </div>
                <a href="#contact" className="btn-primary hero-btn">Prendre rendez-vous</a>
            </div>
        </section>
    );
};

export default Hero;
