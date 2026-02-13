import React, { useEffect, useRef } from 'react';
import najatPhoto01 from '../assets/najat-photo-01.jpeg';
import najatPhoto02 from '../assets/najat-photo-02.jpeg';
import najatPhoto03 from '../assets/najat-photo-03.jpeg';
import najatPhoto04 from '../assets/najat-photo-04.jpeg';
import najatPhoto05 from '../assets/najat-photo-05.jpeg';
import najatPhoto06 from '../assets/najat-photo-06.jpeg';
import najatPhoto07 from '../assets/najat-photo-07.jpeg';
import najatPhoto08 from '../assets/najat-photo-08.jpeg';
import najatPhoto09 from '../assets/najat-photo-09.jpeg';
import najatPhoto10 from '../assets/najat-photo-10.jpeg';
import najatPhoto11 from '../assets/najat-photo-11.jpeg';
import najatPhoto12 from '../assets/najat-photo-12.jpeg';
import najatPhoto13 from '../assets/najat-photo-13.jpeg';
import najatPhoto14 from '../assets/najat-photo-14.jpeg';
import najatPhoto15 from '../assets/najat-photo-15.jpeg';

const galleryImages = [
    najatPhoto01,
    najatPhoto02,
    najatPhoto03,
    najatPhoto04,
    najatPhoto05,
    najatPhoto06,
    najatPhoto07,
    najatPhoto08,
    najatPhoto09,
    najatPhoto10,
    najatPhoto11,
    najatPhoto12,
    najatPhoto13,
    najatPhoto14,
    najatPhoto15,
];

const GallerySection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

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
        if (node) observer.observe(node);
        return () => node && observer.unobserve(node);
    }, []);

    return (
        <section ref={sectionRef} id="galerie" className="gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <span className="gallery-label">GALERIE</span>
                    <h2 className="gallery-title">Cabinet &amp; accompagnement</h2>
                </div>
                <div className="gallery-scroll-wrapper">
                    <div className="gallery-track gallery-track--auto">
                        {[...galleryImages, ...galleryImages].map((src, index) => (
                            <div key={index} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Najat Kobi - Cabinet thérapie de couple ${(index % 15) + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
