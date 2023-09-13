import { Component } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Facebook, Youtube, Twitter, Instagram } from "react-bootstrap-icons";

class MyFooter extends Component {
  render() {
    return (
      <Container className="bg-dark">
        <div className="d-flex">
          <Facebook className="text-secondary me-3 mb-2 fs-3"></Facebook>
          <Instagram className="text-secondary me-3 mb-2 fs-3"></Instagram>
          <Twitter className="text-secondary me-3 mb-2 fs-3"></Twitter>
          <Youtube className="text-secondary  mb-2 fs-3"></Youtube>
        </div>
        <Row>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink>Audio and Subtitled</NavLink>

            <NavLink>Media Center</NavLink>

            <NavLink>Privacy</NavLink>

            <NavLink>Contact Us</NavLink>
          </Col>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink>Audio Description</NavLink>

            <NavLink>Investor Relations</NavLink>

            <NavLink>Legal Notices</NavLink>
          </Col>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink>Help Center</NavLink>

            <NavLink>Jobs</NavLink>

            <NavLink>Cookie Preferences</NavLink>
          </Col>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink>Gift Cards</NavLink>

            <NavLink>Terms of Use</NavLink>

            <NavLink>Corporate Informations</NavLink>
          </Col>
        </Row>
        <div className="d-flex">
          <button type="button" className="btn btn-outline-secondary mb-3">
            Service Code
          </button>
        </div>
        <address className="text-center text-secondary m-0">&copy 1997-2023 Netflix, Inc.</address>
      </Container>
    );
  }
}
export default MyFooter;
