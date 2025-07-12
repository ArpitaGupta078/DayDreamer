

const Pricing = () => {
  return (
    <section className="pricing-section text-center py-5">
      <div className="container">
        <div className="badge mb-3">💰 Pricing</div>
        <h2 className="pricing-heading mb-2">
          Choose Your <span className="highlight">Perfect Plan</span>
        </h2>
        <p className="pricing-subtext mb-5">
          Start free and upgrade when you're ready. All plans include commercial rights.
        </p>

        <div className="row justify-content-center gy-4">
          {/* Starter */}
          <div className="col-md-4">
            <div className="pricing-card p-4">
              <h3>Starter</h3>
              <p className="price">$9<span>/month</span></p>
              <ul>
                <li>50 images/month</li>
                <li>Standard quality</li>
                <li>Basic support</li>
                <li>Commercial license</li>
              </ul>
              <button className="btn custom-btn">Get Started</button>
            </div>
          </div>

          {/* Pro */}
          <div className="col-md-4">
            <div className="pricing-card popular p-4">
              <div className="tag">Most Popular</div>
              <h3>Pro</h3>
              <p className="price">$29<span>/month</span></p>
              <ul>
                <li>500 images/month</li>
                <li>HD quality</li>
                <li>Priority support</li>
                <li>Advanced styles</li>
                <li>Bulk generation</li>
              </ul>
              <button className="btn custom-btn primary">Get Started</button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="col-md-4">
            <div className="pricing-card p-4">
              <h3>Enterprise</h3>
              <p className="price">$99<span>/month</span></p>
              <ul>
                <li>Unlimited images</li>
                <li>4K quality</li>
                <li>24/7 support</li>
                <li>Custom styles</li>
                <li>API access</li>
                <li>Team collaboration</li>
              </ul>
              <button className="btn custom-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
