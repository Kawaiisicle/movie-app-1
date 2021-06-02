const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

export const fetchMovieById = async (id="tt3896198") => await fetch(`${API_URL}&i=${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);

export const fetchMoviesByTerm = async searchTerm => await fetch(`${API_URL}&s=${searchTerm}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);





