//http://www.omdbapi.com/?apikey=ef36e643&
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&i=tt3896198`;

const fetchMovies = async (params = "") => await fetch(params ? `${API_URL}&${params}`: API_URL);

export default fetchMovies;

