import React, { Suspense } from "react";
import { MoviesItem } from "../MoviesItem/MoviesItem";
import Loader from "components/Loader/Loader";
import { MovieCards } from "./MoviesList.styled";

const MoviesList = ({ movies, isResults }) => {

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {isResults ? (
          <p>Немає результатів пошуку.</p>
        ) : (
          <MovieCards>
            {movies.map((movie) => {
              return <MoviesItem key={movie.id} movie={movie} />;
            })}
          </MovieCards>
        )}
      </Suspense>
    </div>
  );
};

export default MoviesList;