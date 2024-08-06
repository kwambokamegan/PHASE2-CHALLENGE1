import React from 'react';

function SearchBar({ onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
