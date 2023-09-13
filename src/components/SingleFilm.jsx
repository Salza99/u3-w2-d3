import { Component } from "react";
import { Link } from "react-router-dom";

class SingleFilm extends Component {
  render() {
    return (
      this.props.film && (
        <div className="h-75">
          <Link to={`moviedetails/${this.props.film.imdbID}`}>
            <img className=" img-fluid h-100" src={this.props.film.Poster} alt="Poster-Film" />
          </Link>
        </div>
      )
    );
  }
}

export default SingleFilm;
