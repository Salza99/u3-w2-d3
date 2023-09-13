import { Col, Container, Row } from "react-bootstrap";
import GenresSelect from "./GenresSelect";
import { useEffect, useState } from "react";
import Galleries from "./Galleries";

const ShowTv = (props) => {
  const [firstGallery, setFirstGallery] = useState(null);

  const fetchGalleries = async () => {
    const firstResponse = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=" + props.firstSearch);
    const firstData = await firstResponse.json();

    setFirstGallery(firstData);
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <Container className="bg-dark">
      <GenresSelect />
      <Row>{firstGallery && <Galleries film={firstGallery} />}</Row>
    </Container>
  );
};

export default ShowTv;
