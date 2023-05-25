import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movieApi";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((data) => {
      setReviews(data.results);
    });
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
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