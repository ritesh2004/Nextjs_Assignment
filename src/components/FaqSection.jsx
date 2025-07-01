"use client";
import { useState } from "react";

const faqs = [
    {
        question: "Do you accept insurance?",
        answer: "No, but a superbill is provided for self-submission.",
    },
    {
        question: "Are online sessions available?",
        answer: "Yes—all virtual sessions via Zoom.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "24-hour notice required.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-[#366a7a] mb-10" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Frequently Asked Questions
                </h2>

                <div className="divide-y divide-gray-300">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left text-xl text-[#366a7a] flex justify-between items-center" style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-3 text-[#366a7a]" style={{ fontFamily: 'var(--font-playfair)' }} >{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
