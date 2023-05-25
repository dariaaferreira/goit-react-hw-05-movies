import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies, isResults }) => {
  return (
    <div>
      {isResults ? (
        <p>Немає результатів пошуку.</p>
      ) : (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;