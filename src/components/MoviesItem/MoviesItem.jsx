import { Link, useLocation } from 'react-router-dom';

export const MoviesItem = ({
    movie: { id, poster_path, original_title, original_name, release_date },
  }) => {
    const location = useLocation();
  
    return (
      <div>
        <Link state={{ from: location }} to={`/movies/${id}`}>
          <img
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w500' + poster_path
                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
            }
            alt={original_title || original_name}
          />
          <div>
            <h3>{original_title || original_name}</h3>
            <p>
              Release year: {new Date(release_date).getFullYear()}
            </p>
          </div>
        </Link>
      </div>
    );
  };