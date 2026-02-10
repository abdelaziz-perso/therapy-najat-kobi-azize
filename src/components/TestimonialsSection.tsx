import React, { useEffect, useRef } from 'react';
import testimonialBg from '../assets/depressed-woman-having-psychotherapy-session-doctor-s-office.jpg';

const TestimonialsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Témoignage 1',
            date: '',
            text: "Même après peu de séances, son aide a été précieuse. Très professionnelle, à l'écoute et directe quand il le faut, elle sait parfaitement encadrer les échanges de couple. Je recommande sincèrement à tous les couples qui souhaitent avancer ensemble avec l'aide d'une vraie professionnelle !",
            initial: '1',
            color: '#c0392b'
        },
        {
            id: 2,
            name: 'Témoignage 2',
            date: '',
            text: "Je recommande vivement Najat pour toute personne à la recherche d'une psychologue bienveillante à l'écoute et profondément humaine, dès les premières séances je me suis sentie en confiance sans jugement. Elle a su m'accompagner avec beaucoup de justesse, d'empathie et de professionnalisme.",
            initial: '2',
            color: '#2ecc71'
        },
        {
            id: 3,
            name: 'Témoignage 3',
            date: '',
            text: "Mon mari et moi avons eu la chance d'être accompagnés par Najat Kobi dans le cadre d'une thérapie de couple, à un moment de notre vie où nous traversions une épreuve qui nous paraissait insurmontable. À l'époque fiancés, nous remettions profondément en question notre avenir commun et le sens même de notre engagement. Avec une bienveillance rare et une justesse de parole remarquable, Najat Kobi a su nous guider dans nos questionnements les plus intimes. Grâce à son écoute, sa sagesse et les outils précieux qu'elle nous a transmis, nous avons pu apprendre à mieux nous comprendre, à mieux communiquer, et à transformer nos fragilités en force. Hamdoullah, ce travail nous a permis de retrouver l'harmonie et d'avancer vers une fin heureuse, fondée sur la confiance et la sérénité. Fidèle à son éthique et à sa clarté professionnelle, Najat Kobi, estimant que le travail à accomplir relevait désormais de nous-mêmes, nous a indiqué avec douceur que la thérapie avait atteint son terme. Elle a néanmoins tenu à nous rappeler que sa porte resterait toujours grande ouverte, à tout moment, pour nous accueillir à nouveau si le besoin s'en faisait sentir.",
            initial: '3',
            color: '#3498db'
        },
        {
            id: 4,
            name: 'Témoignage 4',
            date: '',
            text: "J'ai eu l'occasion de suivre une séance de thérapie de couple en compagnie de mon épouse avec Madame Kobi. Cette séance nous a « fait du bien » même si Mme Kobi n'a pas de « baguette magique » et que tous les problèmes ne se règleront jamais à travers une seule séance de thérapie. En revanche, j'ai apprécié à sa juste valeur la démarche non intrusive ni « commerciale » de Mme Kobi. Elle nous a tout de suite mis à l'aise en nous expliquant qu'elle n'était pas là pour nous voir et revoir à l'infini, au contraire, son objectif est que chaque couple se sente libre de la consulter ou pas en fonction de « où en est le couple », parfois une seule séance peut suffire à remettre certains sujets « sur les rails », parfois il est trop tard, parfois il faut revenir pour aller + en profondeur… Chaque cas a ses spécificités, et Mme Kobi l'a bien compris et en tient compte dans ses thérapies. Je recommande en tous les cas, et quoiqu'il en soit il faut que le « fit » soit là, cela dépend de tout en chacun.",
            initial: '4',
            color: '#f39c12'
        },
        {
            id: 5,
            name: 'Témoignage 5',
            date: '',
            text: "Lors d'une période forte en tensions, mon mari et moi sommes allés voir Najat afin de nous aider à y voir plus clair. La première chose qui m'a marquée chez Najat c'est son enthousiasme, autrement dit sa « good vibe ». Elle nous a tout de suite mit à l'aise, car il faut le dire, ce n'était pas une démarche facile pour nous: parler à une inconnue de nos soucis de couple. Une seule séance a suffi pour que l'on prenne conscience des choses sur lesquelles nous devions travailler, mais aussi les choses sur lesquelles nous devions lâcher prise. Najat nous a aidé à relativiser. C'était donc une thérapie très courte mais très pertinente. J'ai apprécié son honnêteté et sa spontanéité.",
            initial: '5',
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
                            <h3>Ils m'ont fait confiance</h3>
                            <p>Ce que les couples disent de leur accompagnement :</p>
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
