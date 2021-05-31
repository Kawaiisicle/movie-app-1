import React, { Component } from "react";
import MovieCard from "./MovieCard";
import fetchMovies from "../../utils/api";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "batman",
      movies: [],
      totalResults: "",
    };
  }

  componentDidMount() {
    fetchMovies(`s=${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
             movies: res.Search, 
             totalResults: res.totalResults 
            })
      )
      .catch( err => console.error(err));
  }

  render() {
    console.log("Movies: ", this.state.movies);
    return (
      <div>
        <h2>List of Movies</h2>
        { this.state.movies.map( movie => (
            <div key={movie.imdbID}>
                <MovieCard movie={movie} />
            </div>
        ))}
      </div>
    );
  }
}
export default MovieList;