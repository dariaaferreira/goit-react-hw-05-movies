import React, { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from '../api/movieApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
