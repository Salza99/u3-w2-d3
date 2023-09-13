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
            <NavLink href="#">Audio and Subtitled</NavLink>

            <NavLink href="#">Media Center</NavLink>

            <NavLink href="#">Privacy</NavLink>

            <NavLink href="#">Contact Us</NavLink>
          </Col>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink href="#">Audio Description</NavLink>

            <NavLink href="#">Investor Relations</NavLink>

            <NavLink href="#">Legal Notices</NavLink>
          </Col>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink href="#">Help Center</NavLink>

            <NavLink href="#">Jobs</NavLink>

            <NavLink href="#">Cookie Preferences</NavLink>
          </Col>
          <Col xs={6} md={3} className="text-secondary">
            <NavLink href="#">Gift Cards</NavLink>

            <NavLink href="#">Terms of Use</NavLink>

            <NavLink href="#">Corporate Informations</NavLink>
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
