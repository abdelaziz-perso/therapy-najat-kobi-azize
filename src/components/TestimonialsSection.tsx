import React, { useEffect, useRef } from 'react';
import testimonialBg from '../assets/depressed-woman-having-psychotherapy-session-doctor-s-office.jpg';

const TestimonialsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Client anonyme',
            date: 'FÉVRIER 2024',
            text: "Même après peu de séances, son aide a été précieuse. Très professionnelle, à l’écoute et directe quand il le faut, elle sait parfaitement encadrer les échanges de couple. Je recommande sincèrement à tous les couples qui souhaitent avancer ensemble avec l’aide d’une vraie professionnelle !",
            initial: 'C',
            color: '#c0392b'
        },
        {
            id: 2,
            name: 'Patiente',
            date: 'JANVIER 2024',
            text: "Je recommande vivement Najat pour toute personne à la recherche d’une psychologue bienveillante à l’écoute et profondément humaine, dès les premières séances je me suis sentie en confiance sans jugement. Elle a su m’accompagner avec beaucoup de justesse, d’empathie et de professionnalisme.",
            initial: 'P',
            color: '#2ecc71'
        },
        {
            id: 3,
            name: 'Couple Marié',
            date: 'DÉCEMBRE 2023',
            text: "Mon mari et moi avons eu la chance d’être accompagnés par Najat Kobi dans le cadre d’une thérapie de couple, à un moment de notre vie où nous traversions une épreuve qui nous paraissait insurmontable. Avec une bienveillance rare et une justesse de parole remarquable, Najat Kobi a su nous guider. Hamdoullah, ce travail nous a permis de retrouver l’harmonie et d’avancer vers une fin heureuse, fondée sur la confiance et la sérénité.",
            initial: 'C',
            color: '#3498db'
        },
        {
            id: 4,
            name: 'Client',
            date: 'NOVEMBRE 2023',
            text: "J’ai apprécié à sa juste valeur la démarche non intrusive ni « commerciale » de Mme Kobi. Elle nous a tout de suite mis à l’aise en nous expliquant que son objectif est que chaque couple se sente libre de la consulter ou pas en fonction de « où en est le couple ». Je recommande en tous les cas, le « fit » était là.",
            initial: 'C',
            color: '#f39c12'
        },
        {
            id: 5,
            name: 'Patiente',
            date: 'OCTOBRE 2023',
            text: "La première chose qui m’a marquée chez Najat c’est son enthousiasme, autrement dit sa « good vibe ». Elle nous a tout de suite mis à l’aise. Une seule séance a suffi pour que l’on prenne conscience des choses sur lesquelles nous devions travailler. J’ai apprécié son honnêteté et sa spontanéité.",
            initial: 'P',
            color: '#9b59b6'
        }
    ];

    useEffect(() => {
        const node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            },
            { threshold: 0.1 }
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

    const [itemsPerView, setItemsPerView] = React.useState(window.innerWidth <= 768 ? 1 : 3);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth <= 768 ? 1 : 3);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - (itemsPerView - 1)));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (testimonials.length - (itemsPerView - 1))) % (testimonials.length - (itemsPerView - 1)));
    };

    return (
        <section ref={sectionRef} id="temoignages" className="testimonials-section">
            <div className="container testimonials-container">
                <div className="testimonials-header">
                    <div className="header-bg-image">
                        <img src={testimonialBg} alt="Background" loading="lazy" decoding="async" />
                        <div className="header-box">
                            <h3>Pourquoi choisir notre service ?</h3>
                            <p>Ce que nos patients disent de nous :</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-grid-container">
                    <button className="nav-btn prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>

                    <div className="cards-viewport">
                        <div
                            className="cards-slider"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="testimonial-card">
                                    <div className="card-header">
                                        <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="verified-icon"><i className="fas fa-check-circle"></i></div>
                                        <div className="google-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="18" /></div>
                                    </div>
                                    <div className="card-body">
                                        <p>{t.text}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="user-avatar" style={{ backgroundColor: t.color }}>
                                            {t.initial}
                                        </div>
                                        <div className="user-info">
                                            <h4 className="user-name">{t.name}</h4>
                                            <p className="user-date">{t.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="nav-btn next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
                </div>

                <div className="pagination">
                    {Array.from({ length: testimonials.length - (itemsPerView - 1) }).map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${currentIndex === i ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
