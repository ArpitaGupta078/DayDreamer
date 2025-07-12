
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Digital Artist',
    quote: 'This tool has revolutionized my creative workflow. The quality is incredible!',
    stars: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Marketing Director',
    quote: 'Perfect for creating unique visuals for our campaigns. Saves us hours of work.',
    stars: 5
  },
  {
    name: 'Emily Parker',
    role: 'Content Creator',
    quote: 'Love how easy it is to bring my ideas to life. The possibilities are endless!',
    stars: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container text-center">
        <div className="badge mb-3">👥 Testimonials</div>
        <h2 className="section-title mb-4">
          What Our <span className="highlight">Users Say</span>
        </h2>
        <div className="row justify-content-center">
          {testimonials.map((t, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="testimonial-card p-4 h-100 shadow-sm rounded-4">
                <div className="stars mb-2">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="quote">"{t.quote}"</p>
                <div className="mt-3">
                  <strong>{t.name}</strong><br />
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
