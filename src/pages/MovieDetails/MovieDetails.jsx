import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getByMovieId } from "../../api/movieApi";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { Container } from "./MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    getByMovieId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <Container>
      <MovieInfo movieInfo={movie} goBackLink={goBackLink} />
    </Container>
  );
};

export default MovieDetails;
