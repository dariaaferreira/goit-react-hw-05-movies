import React, { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from '../../api/movieApi';
import { Container, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;
