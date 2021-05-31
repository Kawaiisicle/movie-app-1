import React, { Component } from "react";
import { fetchMoviesByTerm } from "../../utils/api";
import MovieCard from "./MovieCard";


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
    fetchMoviesByTerm(this.state.searchTerm)
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
                <MovieCard movieId={movie.imdbID} />
            </div>
        ))}
      </div>
    );
  }
}
export default MovieList;