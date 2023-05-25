import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../api/movieApi";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then((data) => {
      setCast(data.cast);
    });
  }, [movieId]);

  if (!cast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {cast.map(({ id, name, profile_path}) => (
        <div key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
            width="100"
          />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
