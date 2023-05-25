import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from '../api/movieApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
