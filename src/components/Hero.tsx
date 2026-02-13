import React, { useRef, useState, useEffect } from 'react';
import heroVideo from '../assets/video-hero-section.mov';

type VideoOrientation = 'landscape' | 'portrait' | 'square';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false); // audio on by default
    const [videoSrc, setVideoSrc] = useState<string | null>(null); // lazy: load when in view
    const [videoOrientation, setVideoOrientation] = useState<VideoOrientation>('landscape');

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !videoSrc) setVideoSrc(heroVideo);
            },
            { rootMargin: '50px', threshold: 0 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, [videoSrc]);

    const handleVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const video = e.currentTarget;
        const w = video.videoWidth;
        const h = video.videoHeight;
        if (h > w * 1.1) setVideoOrientation('portrait');
        else if (w > h * 1.1) setVideoOrientation('landscape');
        else setVideoOrientation('square');
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

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

    return (
        <section
            ref={sectionRef}
            className={`hero video-hero-section video-hero-section--${videoOrientation}`}
        >
            {videoSrc && (
                <video
                    ref={videoRef}
                    className="video-hero-section__video"
                    src={videoSrc}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                    onLoadedMetadata={handleVideoLoadedMetadata}
                    aria-label="Vidéo de présentation"
                />
            )}
            <div className="video-hero-section__overlay" aria-hidden />
            {videoSrc && (
            <div className="video-hero-section__controls">
                <button
                    type="button"
                    className="video-hero-section__btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Lecture'}
                >
                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
                </button>
                <button
                    type="button"
                    className="video-hero-section__btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                >
                    <i className={`fas fa-volume-${isMuted ? 'mute' : 'up'}`} />
                </button>
            </div>
            )}
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="hero-name">Najat KOBI</span>
                    <span className="hero-job">Thérapeute de couple</span>
                </h1>
                <a href="#contact" className="btn-primary hero-btn">Prendre RDV</a>
            </div>
        </section>
    );
};

export default Hero;
