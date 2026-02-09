import React, { useEffect, useRef } from 'react';

const SessionProcessSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            },
            { threshold: 0.2 }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return (
        <section id="deroulement" ref={sectionRef} className="session-process-section">
            <div className="container">
                <span className="process-label">DÉROULEMENT</span>
                <h2 className="process-main-title">Comment se déroule une séance de thérapie ?</h2>

                <div className="process-steps-list">
                    <div className="process-step-card">
                        <div className="step-number-circle">1</div>
                        <div className="step-card-content">
                            <div className="step-card-title">
                                <h3>Première séance (environ 1h30)</h3>
                            </div>
                            <div className="step-card-text">
                                <p>Je reçois les conjoints ensemble pour une première séance qui dure à peu près 1h30. J’apprends à vous connaitre individuellement puis ensuite je m’intéresse à mon vrai client qui est votre couple.</p>
                            </div>
                        </div>
                    </div>

                    <div className="process-step-card">
                        <div className="step-number-circle">2</div>
                        <div className="step-card-content">
                            <div className="step-card-title">
                                <h3>Séances suivantes</h3>
                            </div>
                            <div className="step-card-text">
                                <p>Les séances suivantes sont sensiblement plus courtes mais elles se font toujours à 3. Il est très rare que je prenne individuellement les conjoints, et même si c’est le cas, c’est en général pour une seule séance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="process-step-card">
                        <div className="step-number-circle">3</div>
                        <div className="step-card-content">
                            <div className="step-card-title">
                                <h3>Durée de la thérapie</h3>
                            </div>
                            <div className="step-card-text">
                                <p>La thérapie de couple est une thérapie brève, elle dure rarement plus de 10 ou 12 séances.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionProcessSection;
