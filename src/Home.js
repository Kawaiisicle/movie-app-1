import React, { Component } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import fetchMovies from "./utils/api";
import MovieCard from "./MovieCard";

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
            title: res.Title,
            poster: res.Poster,
            runTime: res.Runtime,
            genre: res.Genre,
            plot: res.Plot,
            actors: res.Actors,
            rated: res.Rated,
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
