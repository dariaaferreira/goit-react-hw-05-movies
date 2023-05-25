import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getByMovieId } from "../api/movieApi";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getByMovieId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, overview, release_date, vote_average, poster_path } = movie;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="200"
      />
      <h2>{title}</h2>
      <p>Released: {release_date}</p>
      <p>Rating: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <p>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </p>
      <p>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </p>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
