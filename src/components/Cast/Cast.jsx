import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movieApi";

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
      {cast.length > 0 ? (
        cast.map(({ id, name, character, profile_path }) => (
          <div key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
              }
              alt={name}
              width="100"
            />
            <p>{name}</p>
            <p>
              <b>Character:</b> {character}
            </p>
          </div>
        ))
      ) : (
        <p>This movie has no actors.</p>
      )}
    </div>
  );
};

export default Cast;