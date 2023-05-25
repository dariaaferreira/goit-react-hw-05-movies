import { Routes, Route, NavLink } from "react-router-dom";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Cast from "pages/Cast";

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
