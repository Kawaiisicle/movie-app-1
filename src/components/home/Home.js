import React, { Component } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import MovieList from "../movies/MovieList";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="text-center text-uppercase py-3">
          {this.props.greeting}
        </h1>
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
