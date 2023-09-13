import { Button, Col, Container, Row } from "react-bootstrap";
import Avatar from "../assets/avatar.png";

const ProfilePage = () => {
  return (
    <Container className="text-center text-sm-start mt-5">
      <h1 class="text-light mb-4">Edit Profile</h1>
      <Row className="justify-content-center">
        <Col xs={12} sm={3}>
          <img className="img-fluid" src={Avatar} alt="Immagine di profilo" />
        </Col>
        <Col xs={12} sm={9} md={7} className="mt-4 mt-sm-0">
          <input
            type="text"
            readonly
            placeholder="Strive Student"
            class="bg-secondary text-light mb-4"
            value="Strive Student"
          />
          <div class="mb-4">
            <h5 class="text-secondary">Language:</h5>
          </div>
          <div class="mb-4">
            <h5 class="text-secondary">Maturity Settings:</h5>
            <button class="btn bg-dark bg-opacity-50 text-light">ALL MATURITY RATINGS</button>
            <p class="text-light fw-light">
              Show titles of <span class="fw-bold">all maturity ratings</span> for this profile
            </p>
            <Button className="mb-2" variant="outline-secondary">
              EDIT
            </Button>
            <div>
              <h5 class="text-secondary">Autoplay controls</h5>
              <div class="d-flex align-items-center mb-2">
                <p class="text-light mb-0">
                  <input class="form-check-input bg-dark text-secondary fs-4 border-secondary mt-0" type="checkbox" />
                  Autoplay next episode in a series on all devices
                </p>
              </div>
              <div class="d-flex align-items-center mb-4">
                <p class="text-light mb-0">
                  <input class="form-check-input bg-dark text-secondary fs-4 border-secondary mt-0" type="checkbox" />
                  Autoplay previews while broswing on all devices
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button variant="outline-dark" className="text-secondary">
            SAVE
          </Button>
        </Col>
        <Col>
          <Button variant="outline-dark" className="text-secondary">
            CANCEL
          </Button>
        </Col>
        <Col>
          <Button variant="outline-dark" className="text-secondary">
            DELETE PROFILE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
