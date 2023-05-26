import React from "react";

const MovieInfo = ({ movie }) => {
  const { title, overview, genres, release_date, vote_average, poster_path } = movie;
  
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
        }
        alt={title}
        width="200"
      />
      <h2>{title} ({new Date(release_date).getFullYear()})</h2>
      <p>User score: {(vote_average * 10).toFixed(0)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      {genres.length > 0 && (
        <>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
