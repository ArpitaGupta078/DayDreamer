import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const LearnMore = () => {
  return (
    <section className="learn-more-section py-5">
      <Container className="pb-0 mb-0">
        <Row className="align-items-center">
          <Col md={6}>
            <img
               src="/images/image51.jpg"
                style={{ width: "400px", height: "500px" }}
              alt="AI-generated whimsical illustration"
              className="img-fluid cute-image"
            />
          </Col>
          <Col md={6}>
            <h2 className="cute-title mb-3">✨ What is DayDreamer?</h2>
            <p className="cute-text">
              DayDreamer is your magical companion that turns your ideas into charming digital art! With the power of AI, you can create whimsical illustrations in seconds.
            </p>
            <p className="cute-text">
              Whether you're a curious explorer or an artistic soul, AI Illustrator makes creativity fun, fast, and fabulous! 💖
            </p>
            
            <Link to="/img-gen">
      <button type="button" className="cute-btn mt-3">
        Let's Get Creative 🎨
      </button>
    </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LearnMore;
