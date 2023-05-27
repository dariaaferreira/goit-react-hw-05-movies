import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movieApi";
import Loader from "components/Loader/Loader";

import {
  ReviewDescr,
  ReviewItem,
  ReviewList,
  ReviewAuthor,
} from "./Reviews.styled";

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
    return <Loader />;
  }

  if (!reviews || reviews.length === 0) {
    return <div style={{ marginLeft: '40px' }}>We don't have any reviews for this movie.</div>;
  }

  return (
    <ReviewList>
      {reviews.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <ReviewAuthor><b>Author:</b> {author}</ReviewAuthor>
          <ReviewDescr>{content}</ReviewDescr>
        </ReviewItem>
      ))}
    </ReviewList>
  );
};

export default Reviews;