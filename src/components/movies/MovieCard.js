import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    })
  }

  render() {
    let movie = this.props.movie;
    let isOpen = this.state.isOpen;
    return (
      <div className="row justify-content-center my-5 p-0">
        <div
          className="col-md-3 bg-light m-0 p-0"
          style={{ border: "2px solid #29508F" }}
        >
          <img
            className="img-fluid"
            src={movie.Poster}
            alt={`Movie poster for ${movie.Title}`}
          />
          <div className="text-center px-4 py-2">
            <p className="h4 text-center" style={{ color: "#29508F" }}>
              {movie.Title}
            </p>
            <button
              //   ONCLICK
              onClick={this.openModal}
              className="text-light rounded px-4 py-1"
              style={{ backgroundColor: "#29508F", border: "unset" }}
            >
              Details
            </button>
          </div>
        </div>
        <Modal isOpen={isOpen} closeModal={() => this.setState({isOpen: false})}>
          <div className="row">
            <div className="col-md-4 d-flex flex-wrap justify-content-between h4">
              <p className="h4">{movie.Title}</p>
              <p
                className="text-monospace badge text-light"
                style={{ backgroundColor: "#4276C9" }}
              >
                {movie.Rated}
              </p>
              <p
                className="text-monospace badge text-light"
                style={{ backgroundColor: "#4276C9" }}
              >
                {movie.RunTime}
              </p>
              <p
                className="text-monospace badge text-light"
                style={{ backgroundColor: "#4276C9" }}
              >
                {movie.Genre}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="modal_heading">Plot</p>
              <p>{movie.Plot}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="modal_heading">Actors</p>
              <p>{movie.Actors}</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {
    imdbID: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    runTime: PropTypes.string,
    genre: PropTypes.string,
    plot: PropTypes.string,
    actors: PropTypes.string,
    rated: PropTypes.string,
  },
};

export default MovieCard;
