import { Link, useLocation } from 'react-router-dom';
import { MovieTitle, MovieImg, MovieItem } from './MoviesItem.styled'

export const MoviesItem = ({
  movie: { id, poster_path, original_title, original_name },
}) => {
  const location = useLocation();

  return (
    <MovieItem>
      <Link 
        state={{ from: location }} to={`/movies/${id}`} 
        style={{ textDecoration: 'none' }}>
        <MovieImg
          src={
            poster_path
              ? "https://image.tmdb.org/t/p/w500" + poster_path
              : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          }
          alt={original_title || original_name}
        />
        <MovieTitle>{original_title || original_name}</MovieTitle>
      </Link>
    </MovieItem>
  );
};