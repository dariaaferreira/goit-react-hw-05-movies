import React, { Suspense } from "react";
import { BackLink } from "../BackLink/BackLink";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "components/Loader/Loader";
import {
  MovieWrapper,
  LinkList,
  LinkItem,
  LinkStyled,
  Overview
} from './MovieInfo.styled';

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
      <MovieWrapper>
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
        <p><b>User score:</b> {(vote_average * 10).toFixed(0)}%</p>
        {overview && <h3>Overview</h3>}
        {overview && <Overview>{overview}</Overview>}
        {genres.length > 0 && (
          <>
            <h3>Genres</h3>
            <p>{genres.map((genre) => genre.name).join(", ")}</p>
          </>
        )}
      </MovieWrapper>

      <LinkList>
        <LinkItem>
          <LinkStyled
            state={{ from: location.state?.from ?? "/movies" }}
            to="cast"
          >
            Cast
          </LinkStyled>
        </LinkItem>
        <LinkItem>
          <LinkStyled
            state={{ from: location.state?.from ?? "/movies" }}
            to="reviews"
          >
            Review
          </LinkStyled>
        </LinkItem>
      </LinkList>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
