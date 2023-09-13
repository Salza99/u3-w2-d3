import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class Galleries extends Component {
  render() {
    return (
      <Row className="flex-nowrap overflow-hidden text-center">
        {this.props.film.Search &&
          this.props.film.Search.map((film) => {
            return (
              <Col xs={6} md={4} lg={3} key={film.imdbID}>
                <SingleFilm film={film} />
              </Col>
            );
          })}
      </Row>
    );
  }
}

export default Galleries;
