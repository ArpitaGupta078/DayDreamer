import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from '../NavbarComponent';

const First = () => {
  return (
    <div className="page-layout d-flex flex-column min-vh-100">
      <NavbarComponent />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default First;
