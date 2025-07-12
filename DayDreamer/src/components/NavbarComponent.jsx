import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-stars me-2 brand-icon"></i>
          <span className="brand-text">DayDreamer</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <Link to = "/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to = "/features" className="nav-link" >Features</Link>
            </li>
          
            <li className="nav-item">
              <Link to = "/pricing" className="nav-link" href="pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="faq">FAQ</a>
            </li>
          </ul>
          
          <Link to="/img-gen" className="btn btn-primary glow-btn ">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
