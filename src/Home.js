import React from "react";
import "./Home.css"
import MovieList from "./MovieList";
import fetchMovies from "./utils/api";
import PropTypes from "prop-types";


class Home extends React.Component {
    // Useful when playing with state
     constructor(props) {
         super(props)
         this.state = {
             isLoading: false,
             searchTerm: "",
             movieTitle: "",
             poster: ""
         }
     }
    
    componentDidMount() {
        fetchMovies().then(res => res.json()).then(res => {
             console.log("Result: ", res);
             this.setState({movieTitle: res.Title, poster: res.Poster})
         }).catch( err => console.error(err));
    }
    
    componentDidUpdate(prevProps, newProps) {
        if(prevProps !== newProps) {
            console.log("YES")
        }
    }
    render() {
        let movieTitle;
        movieTitle = this.state.movieTitle;
        return(
            <>
                <h1 className="heading">{this.props.greeting}</h1>
                <button onClick={() => this.setState({title: "ok"})}>ok</button>
                <MovieList>
                     { movieTitle && <p>{this.state.movieTitle }</p>}
                </MovieList>
            </>
        );
    }
}
// PROP & DEFAULT TYPES
Home.propTypes = {
    greeting: PropTypes.string
}
Home.defaultProps = {
    greeting: "Hello World@@@@!"
}

export default Home;