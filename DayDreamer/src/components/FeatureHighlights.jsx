// src/components/FeatureHighlights.jsx

const features = [
  {
    icon: "bi-lightning-charge-fill",
    title: "Lightning Fast",
    desc: "Generate stunning artwork in seconds with state-of-the-art AI technology",
  },
  {
    icon: "bi-palette-fill",
    title: "Unlimited Styles",
    desc: "From photorealistic to abstract, create art in any style you can imagine",
  },
  {
    icon: "bi-shield-lock-fill",
    title: "High Quality",
    desc: "Professional-grade images perfect for commercial and personal use",
  },
  {
    icon: "bi-cloud-arrow-down-fill",
    title: "Instant Download",
    desc: "Download your creations immediately in high resolution formats",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="feature-section py-5">
      <div className="container text-center">
        <div className="badge badge-glow mb-3">
          <i className="bi bi-stars me-2"></i> Features
        </div>
        <h2 className="display-5 fw-bold mb-3">
          Why Choose <span className="highlight-purple">AI Illustrator?</span>
        </h2>
        <p className="text-muted mb-5">
          Discover the powerful features that make our AI art generator the best choice for creators.
        </p>

        <div className="row g-4">
          {features.map((feature, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="feature-card p-4 text-center h-100">
                <div className="icon-box mb-3">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
