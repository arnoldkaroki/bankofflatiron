// SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input type="text" placeholder="Search by description" value={searchTerm} onChange={e => onSearchChange(e.target.value)} />
    </div>
  );
}

export default SearchBar;
