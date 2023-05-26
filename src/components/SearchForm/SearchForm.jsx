import React from "react";

const SearchForm = ({ searchInput, handleSearchChange, handleSearchSubmit }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input 
          type="text" 
          name="search"
          value={searchInput} 
          placeholder="Enter movie name..."
          onChange={handleSearchChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;