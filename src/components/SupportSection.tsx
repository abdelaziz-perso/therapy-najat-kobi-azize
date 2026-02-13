import React, { useEffect, useRef, useState } from 'react';
import imgLarge from '../assets/najat-photo-02.jpeg';
import supportVideo from '../assets/video-hero-section.mov';

const SupportSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

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

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        video.addEventListener('play', onPlay);
        video.addEventListener('pause', onPause);
        return () => {
            video.removeEventListener('play', onPlay);
            video.removeEventListener('pause', onPause);
        };
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <section ref={sectionRef} className="support-section">
            <div className="container support-container">
                <div className="support-text">
                    <p className="support-description">
                        Traverser une crise dans son couple, ressentir une déconnexion profonde ou faire face à des
                        conflits incessants peut être extrêmement isolant. Vous n'êtes pas seuls dans ce combat pour
                        sauver votre relation.
                    </p>
                    <p className="support-list-intro">
                        De nombreux couples consultent pour :
                    </p>
                    <ul className="support-list">
                        <li>Crises de confiance et infidélité</li>
                        <li>Problèmes de communication et cercles vicieux</li>
                        <li>Désaccord sur l'éducation des enfants</li>
                        <li>Tensions avec la belle-famille</li>
                        <li>Baisse de la libido et routine sexuelle</li>
                        <li>Épuisement parental et impact sur le couple</li>
                        <li>Transitions de vie (naissance, retraite, déménagement)</li>
                        <li>Sentiment de solitude à deux</li>
                        <li>Incertitude sur l'avenir de la relation</li>
                    </ul>
                </div>

                <div className="support-images">
                    <div className="image-large">
                        <img src={imgLarge} alt="Couple en discussion constructive" loading="lazy" decoding="async" />
                    </div>
                    <div className="image-stack">
                        <div className="image-small image-small--single support-video-wrap">
                            <video
                                ref={videoRef}
                                src={supportVideo}
                                loop
                                playsInline
                                preload="auto"
                                muted={isMuted}
                                aria-label="Thérapie de couple"
                            />
                            <div className="support-video-controls">
                                <button
                                    type="button"
                                    className="support-video-btn"
                                    onClick={togglePlay}
                                    aria-label={isPlaying ? 'Pause' : 'Lecture'}
                                >
                                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
                                </button>
                                <button
                                    type="button"
                                    className="support-video-btn"
                                    onClick={toggleMute}
                                    aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                                >
                                    <i className={`fas fa-volume-${isMuted ? 'mute' : 'up'}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
