import React from "react";

import { SearchFormBar, SearchFormButton, SearchFormInput } from "./SearchForm.styled"

const SearchForm = ({ searchInput, handleSearchChange, handleSearchSubmit }) => {
  return (
    <SearchFormBar onSubmit={handleSearchSubmit}>
      <SearchFormInput 
          type="text" 
          name="search"
          value={searchInput} 
          placeholder="Enter movie name..."
          onChange={handleSearchChange} />
      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchFormBar>
  );
};

export default SearchForm;