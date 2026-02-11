import React, { useState } from 'react';
import contactBg from '../assets/doctor-offering-medical-teleconsultation.jpg';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });

    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch('/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            let result: { success?: boolean; message?: string };
            try {
                result = text ? JSON.parse(text) : {};
            } catch {
                result = {};
            }

            const message = result.message || (response.ok ? 'Merci ! Votre message a été envoyé.' : 'Une erreur est survenue.');

            if (response.ok && result.success !== false) {
                setStatus({ type: 'success', message });
                setFormData({
                    firstname: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    message: ''
                });
            } else {
                setStatus({ type: 'error', message });
            }
        } catch {
            setStatus({ type: 'error', message: 'Impossible de contacter le serveur. Vérifiez votre connexion.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="contact-overlay"></div>
            <div className="container contact-container">
                <div className="contact-header">
                    <span className="contact-label">CONTACT</span>
                    <h2 className="contact-title">Une Demande ? Une Question ?</h2>
                </div>

                <div className="contact-card">
                    <div className="contact-form-side">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Prénom</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Prénom"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Nom"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Téléphone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Téléphone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        placeholder="jj/mm/aaaa"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Temps</label>
                                    <input
                                        type="time"
                                        name="time"
                                        placeholder="--:--"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {status.type && (
                                <div className={`form-status ${status.type}`}>
                                    <i className={status.type === 'success' ? 'fas fa-circle-check' : 'fas fa-circle-exclamation'}></i>
                                    <span>{status.message}</span>
                                </div>
                            )}

                            <button type="submit" className="btn-send" disabled={loading}>
                                {loading ? 'Envoi...' : 'envoyer'}
                            </button>
                        </form>
                    </div>

                    <div className="contact-info-side">
                        <h3>Prendre rdv</h3>
                        <p className="info-intro">Par téléphone ou par mail</p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">TEL</span>
                                    <a href="tel:+212661338197" className="info-value">06.61.33.81.97</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">MAIL</span>
                                    <a href="mailto:najatkobi7@gmail.com" className="info-value">najatkobi7@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">INSTA</span>
                                    <a href="https://www.instagram.com/kobi.najat/" target="_blank" rel="noopener noreferrer" className="info-value">kobi.najat</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ADRESSE</span>
                                    <span className="info-value">Lotissemebt Arsat Lakbir, immeuble 16 le noble Etage 5 appartement 23</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.015120109924!2d-7.646187500000001!3d33.5771875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd14f48a9011%3A0x7b92e3999875894a!2sNajat%20Kobi%20%E2%80%93%20Th%C3%A9rapie%20Conjugale%20%C3%A0%20Casablanca!5e1!3m2!1sen!2sma!4v1770743370994!5m2!1sen!2sma"
                                width="400"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Najat Kobi – Thérapie Conjugale à Casablanca"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wavy-divider">
                <svg viewBox="0 0 1440 120" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default ContactSection;
