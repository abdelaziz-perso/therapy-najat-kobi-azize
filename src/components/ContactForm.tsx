import React, { useState } from 'react';

const ContactForm: React.FC = () => {
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
        <form className="contact-form contact-form--in-faq" onSubmit={handleSubmit}>
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
    );
};

export default ContactForm;
