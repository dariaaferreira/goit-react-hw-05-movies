import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { getByMovieId } from "../api/movieApi";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getByMovieId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MovieInfo movie={movie} />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;