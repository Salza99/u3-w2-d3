import { Container, Spinner } from "react-bootstrap";
import Galleries from "./Galleries";
import MyFooter from "./MyFooter";
import GenresSelect from "./GenresSelect";
import { useEffect, useState } from "react";

const HomePage = (props) => {
  const [firstGallery, setFirstGallery] = useState(null);
  const [secondGallery, setSecondGallery] = useState(null);
  const [thirdGallery, setThirdGallery] = useState(null);

  useEffect(() => {
    fetchGalleries();
  }, []);
  const fetchGalleries = async () => {
    const firstResponse = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=" + props.firstSearch);
    const firstData = await firstResponse.json();

    setFirstGallery(firstData);

    const secondResponse = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=" + props.secondSearch);
    const secondData = await secondResponse.json();
    setSecondGallery(secondData);

    const thirdResponse = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=" + props.thirdSearch);
    const thirdData = await thirdResponse.json();
    setThirdGallery(thirdData);
  };

  return (
    <div className="bg-dark">
      <Container fluid>
        <GenresSelect />

        <div>
          <h2 className="text-white mb-5">Hunger Games</h2>

          {firstGallery ? (
            <Galleries film={firstGallery} />
          ) : (
            <Spinner className="text-white mb-5" animation="border" role="status"></Spinner>
          )}
        </div>
        <div>
          <h2 className="text-white mb-5">Fast & Furious</h2>

          {secondGallery ? (
            <Galleries film={secondGallery} />
          ) : (
            <Spinner className="text-white mb-5" animation="border" role="status"></Spinner>
          )}
        </div>
        <div>
          <h2 className="text-white mb-5">The Chronicle of Narnia</h2>

          {thirdGallery ? (
            <Galleries film={thirdGallery} />
          ) : (
            <Spinner className="text-white mb-5" animation="border" role="status"></Spinner>
          )}
        </div>
      </Container>
      <MyFooter />
    </div>
  );
};

export default HomePage;
