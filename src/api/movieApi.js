const API_KEY = "8bbca68b0ae3741f3662f327be8188fc";

export const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log('Error fetching trending movies:', error);
      return [];
    }
  };