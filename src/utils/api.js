const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=tt3896198`;

const fetchMovies = async (params = "") => await fetch(params ? `${API_URL}&${params}`: API_URL);

export default fetchMovies;

