import React from "react";
import { MoviesItem } from "../MoviesItem/MoviesItem"

const MoviesList = ({ movies, isResults }) => {
  return (
    <div>
      {isResults ? (
        <p>Немає результатів пошуку.</p>
      ) : (
        <ul>
        {movies.map(movie => {
          return <MoviesItem key={movie.id} movie={movie} />;
        })}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;