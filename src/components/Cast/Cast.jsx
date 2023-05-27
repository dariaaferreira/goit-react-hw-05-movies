import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movieApi";
import Loader from "components/Loader/Loader";
import { CastList, CastItem,  CastImg, CastDescr, CastText } from "./Cast.styled"

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
    return <Loader />;
  }

  if (!cast || cast.length === 0) {
    return <div style={{ marginLeft: '40px' }}>This movie has no actors.</div>;
  }

  return (
    <CastList>
      {cast.map(({ id, name, character, profile_path }) => (
        <CastItem key={id}>
          <CastImg
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            }
            alt={name}
            width="100"
          />
          <CastDescr>
          <CastText>{name}</CastText>
          <CastText>
            <b>Character:</b> {character}
          </CastText>
          </CastDescr>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;