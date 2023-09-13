import HomePage from "./components/HomePage";

import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowTv from "./components/ShowTv";
import MovieDetails from "./components/MovieDatails";

function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                firstSearch={"hunger%20games"}
                secondSearch={"fast%20and%20furious"}
                thirdSearch={"the%20chronicles%20of%20narnia"}
              />
            }
          />

          <Route path="/showTv" element={<ShowTv firstSearch={"hunger%20games"} />} />
          <Route path="/movieDetails/:movieId" element={<MovieDetails />} />

          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
