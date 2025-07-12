import { Link } from 'react-router-dom';

const AmazingArtSection = () => {
  return (
    <div className="art-section text-center py-5">
      <h1 className="title">
        Ready to Create <span className="highlight">Amazing Art?</span>
      </h1>
      <p className="subtitle">
        Join thousands of creators who are already using AI to bring their imagination to life.
      </p>
      <div className="button-group d-flex justify-content-center mt-4">
        <Link to="/img-gen">
        <button className="btn btn-primary custom-btn me-3">
          <i className="bi bi-stars"></i> Start Creating Now
        </button></Link>
        <button className="btn btn-outline-dark view-btn">
          <i className="bi bi-eye"></i> View Examples
        </button>
      </div>
    </div>
  );
};

export default AmazingArtSection;
