import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movieApi";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getMovieCast(movieId)
      .then((data) => {
        setCast(data.cast);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!cast || cast.length === 0) {
    return <div>This movie has no actors.</div>;
  }

  return (
    <div>
      {cast.map(({ id, name, character, profile_path }) => (
        <div key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            }
            alt={name}
            width="100"
          />
          <p>{name}</p>
          <p>
            <b>Character:</b> {character}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
