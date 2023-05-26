import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movieApi";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getMovieReviews(movieId)
      .then((data) => {
        setReviews(data.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div>We don't have any reviews for this movie.</div>;
  }

  return (
    <div>
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
