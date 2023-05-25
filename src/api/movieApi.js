const API_KEY = "8bbca68b0ae3741f3662f327be8188fc";
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error fetching trending movies:', error);
  }
};

export const getByMovieId = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movie details:', error);
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching cast details:', error);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching reviews:', error);
  }
};

export const getSearchMovies = async (movie) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movie}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching search movies:', error);
  }
};