import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData: FAQItem[] = [
        {
            question: "Comment puis-je prendre mon premier rendez-vous ?",
            answer: "Lorsque vous cliquez sur le bouton « Prendre RDV », il vous dirigera directement vers le formulaire de contact, où vous pourrez nous envoyer votre demande de rendez-vous."
        },
        {
            question: "vous proposez vos services en quelles langues ?",
            answer: "Les consultations sont proposées en français, arabe et anglais."
        },
        {
            question: "Quel est le tarif d'une consultation, et quel est le moyen de paiement que vous acceptez ?",
            answer: "Le tarif varie selon le type de consultation. Nous acceptons les paiements par virement, carte bancaire ou espèces. Les consultations ont lieu uniquement au cabinet (pas en ligne)."
        },
        {
            question: "Proposez-vous des tarifs réduits ?",
            answer: "Oui, des tarifs adaptés peuvent être discutés selon votre situation personnelle lors du premier entretien."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="faq-title">Comment pouvons-nous vous aider ?</h2>
                <div className="faq-container">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3>{item.question}</h3>
                                <div className="faq-icon">
                                    {openIndex === index ? (
                                        <i className="fas fa-minus"></i>
                                    ) : (
                                        <i className="fas fa-plus"></i>
                                    )}
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
