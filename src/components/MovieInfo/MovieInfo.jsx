import React, { Suspense } from "react";
import { BackLink } from "../BackLink/BackLink";
import { Link, Outlet, useLocation } from "react-router-dom";
import Loader from "components/Loader/Loader";

const MovieInfo = ({
  movieInfo: {
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
    poster_path,
  },
  goBackLink,
}) => {
  const location = useLocation();

  return (
    <>
      <BackLink goBackLink={goBackLink} />
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          }
          alt={original_title}
          width="200"
        />
        <h2>
          {original_title} ({new Date(release_date).getFullYear()})
        </h2>
        <p>User score: {(vote_average * 10).toFixed(0)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres.length > 0 && (
          <>
            <h3>Genres</h3>
            <p>{genres.map((genre) => genre.name).join(", ")}</p>
          </>
        )}
      </div>

      <ul>
        <li>
          <Link
            state={{ from: location.state?.from ?? "/movies" }}
            to="cast"
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            state={{ from: location.state?.from ?? "/movies" }}
            to="reviews"
          >
            Review
          </Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
