import React, { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from '../../api/movieApi';
import { Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Container>
      <div>
        <h1>Trending today</h1>
      </div>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;
