import React, { Component } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import fetchMovies from "../../utils/api";
import MovieCard from "../movies/MovieCard";
import MovieList from "../movies/MovieList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }
  componentDidMount() {
    fetchMovies()
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movie: {
            Title: res.Title,
            Poster: res.Poster,
            RunTime: res.Runtime,
            Genre: res.Genre,
            Plot: res.Plot,
            Actors: res.Actors,
            Rated: res.Rated,
          },
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="text-center text-uppercase py-3">
          {this.props.greeting}
        </h1>
        <MovieCard movie={this.state.movie} />
        <div>
          {/* MOVIE LIST */}
          <MovieList/>
        </div>
      </div>
    );
  }
}
// PROP & DEFAULT TYPES
Home.propTypes = {
  greeting: PropTypes.string,
};
Home.defaultProps = {
  greeting: "Welcome to Shmoovie",
};

export default Home;
