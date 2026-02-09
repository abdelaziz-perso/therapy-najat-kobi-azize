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

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: result.message });
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
                setStatus({ type: 'error', message: result.message || 'Une erreur est survenue.' });
            }
        } catch {
            setStatus({ type: 'error', message: 'Impossible de contacter le serveur.' });
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
                        <h3>Besoin d'aide supplémentaire ?</h3>
                        <p className="info-intro">N'hésitez pas à nous appeler, nous sommes là pour vous accompagner.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ASSISTANCE À LA CLIENTÈLE</span>
                                    <a href="tel:+212661338197" className="info-value">06 61 33 81 97</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-value">Lotissemebt Arsat Lakbir, immeuble 16 le noble Etage 5 appartement 23</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ASSISTANCE PAR E-MAIL</span>
                                    <a href="mailto:najatkobi7@gmail.com" className="info-value">najatkobi7@gmail.com</a>
                                </div>
                            </div>
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
