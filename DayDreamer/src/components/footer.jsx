import React from "react";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <small>
          © 2024 <strong>DayDreamer</strong>. All rights reserved. Made with{" "}
          <FaHeart className="icon" /> using AI.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
