import React, { useState } from 'react';

const faqs = [
  {
    question: 'How does AI image generation work?',
    answer: 'AI uses deep learning to analyze and generate images based on input prompts or patterns.',
  },
  {
    question: 'Can I use the generated images commercially?',
    answer: 'Yes, all generated images come with a commercial license by default.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'We support JPEG, PNG, and WebP formats.',
  },
  {
    question: 'How long does it take to generate an image?',
    answer: 'Typically, it takes just a few seconds depending on the complexity of the prompt.',
  },
];

export default function CuteFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="faq-container">
      <div className="text-center mb-5">
        <span className="badge .cute-badge">💬 FAQ</span>
        <h2 className="faq-title">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-muted">Your top queries, answered simply.</p>
      </div>
      <div className="faq-box">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question d-flex justify-content-between align-items-center">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
