import React from "react";

const SearchForm = ({ searchInput, handleSearchChange, handleSearchSubmit }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input 
          type="text" 
          value={searchInput} 
          onChange={handleSearchChange} />
      <button type="submit">Пошук</button>
    </form>
  );
};

export default SearchForm;