import React, { Suspense } from "react";
import { MoviesItem } from "../MoviesItem/MoviesItem";
import Loader from "components/Loader/Loader";

const MoviesList = ({ movies, isResults }) => {

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {isResults ? (
          <p>Немає результатів пошуку.</p>
        ) : (
          <ul>
            {movies.map((movie) => {
              return <MoviesItem key={movie.id} movie={movie} />;
            })}
          </ul>
        )}
      </Suspense>
    </div>
  );
};

export default MoviesList;