import { Col, Container, Row } from "react-bootstrap";
import GenresSelect from "./GenresSelect";

const ShowTv = () => {
  console.log("ci sono");
  return (
    <Container className="bg-dark">
      <GenresSelect />
      <Row>
        <Col>Ciao</Col>
      </Row>
    </Container>
  );
};

export default ShowTv;
