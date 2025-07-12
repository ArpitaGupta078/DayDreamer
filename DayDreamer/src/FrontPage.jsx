import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const FrontPage = () => {
  return (
    <div className="front-page bg-dark text-white">
      <div className="container-fluid p-4">
        <div className="row g-3">
          <div className="col-md-4">
            <img src="/images/1.png" className="img-fluid rounded" alt="img1" />
          </div>
          <div className="col-md-4">
            <img src="/images/2.png" className="img-fluid rounded" alt="img2" />
          </div>
          <div className="col-md-4">
            <img src="/images/3.png" className="img-fluid rounded" alt="img3" />
          </div>

          <div className="col-md-4">
            <img src="/images/4.png" className="img-fluid rounded" alt="img4" />
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center flex-column text-center">
            <h1 className="brand-title">DayDreamer</h1>
            <p className="tagline">“From words to wonder.”</p>
          </div>
          <div className="col-md-4">
            <img src="/images/5.png" className="img-fluid rounded" alt="img5" />
          </div>

          <div className="col-md-4">
            <img src="/images/6.png" className="img-fluid rounded" alt="img6" />
          </div>
          <div className="col-md-4">
            <img src="/images/7.png" className="img-fluid rounded" alt="img7" />
          </div>
          <div className="col-md-4 d-flex align-items-end justify-content-end">
            <a href="#home" className="btn btn-lg btn-primary rounded-pill get-started-btn">
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
