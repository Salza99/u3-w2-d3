import { Badge, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [filmDetailsObj, setFilmDetailsObj] = useState(null);
  const [comments, setComments] = useState(null);

  const params = useParams();

  const fetchDataFilm = async () => {
    const response = await fetch("http://www.omdbapi.com/?apikey=f1d3a0a6&i=" + params.movieId);
    const DataObj = await response.json();
    setFilmDetailsObj(DataObj);
  };
  const fetchComment = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + params.movieId + "/comments", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YzllMzhkM2Q0OTAwMTRjZmQ3ZjgiLCJpYXQiOjE2OTQ2MTU0NDcsImV4cCI6MTY5NTgyNTA0N30.gAoYObyqc4KV108h2NDloRkyKpN4Zd6XT-HAvFHPiCE",
      },
    });
    const commentObj = await response.json();
    console.log(commentObj);
    setComments(commentObj);
  };

  useEffect(() => {
    fetchDataFilm();
    fetchComment();
  }, []);

  return (
    <Container fluid className="bg-dark mt-5">
      {filmDetailsObj && (
        <>
          <Row>
            <Col xs={12} className="mb-4">
              <img className="rounded-circle" src={filmDetailsObj.Poster} alt="Poster-film" />
            </Col>
            <Col xs={12} className="mb-3">
              <h1 className="text-white mb-3 display-4 fw-bold">{filmDetailsObj.Title}</h1>
              <Badge className="me-1">{filmDetailsObj.Year}</Badge>
              <Badge className="mb-2">{filmDetailsObj.Runtime}</Badge>
              <p className="text-secondary mb-2">Genres: {filmDetailsObj.Genre}</p>
              <p className="text-secondary mb-2">Actors: {filmDetailsObj.Actors}</p>
              <p className="text-secondary mb-2">Director: {filmDetailsObj.Director}</p>
              <p className="text-secondary mb-4">Writers: {filmDetailsObj.Writer}</p>
              <h5 className="text-white mb-2">Descrizione</h5>
              <p className="text-secondary m-0">{filmDetailsObj.Plot}</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <CommentArea comments={comments} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
