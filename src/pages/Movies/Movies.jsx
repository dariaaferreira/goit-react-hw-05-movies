import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../api/movieApi";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import { SearchbarContainer, SearchContainer } from "./Movies.styled";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isResults, setIsResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }

    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(query);
        const results = data.results;

        if (results.length < 1) {
          setMovies([]);
          setIsResults(true);
        } else {
          setMovies(results);
          setIsResults(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setSearchParams({ query: searchInput.toLowerCase() });
    setSearchInput("");
  };

  return (
    <>
      <SearchContainer>
        <SearchForm
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        />
      </SearchContainer>
      <SearchbarContainer>
      {query && (
        <div>
            {isLoading ? (
              <Loader />
            ) : (
              <MoviesList movies={movies} isResults={isResults} />
            )}
        </div>
      )}
    </SearchbarContainer>
    </>

  );
};

export default Movies;
