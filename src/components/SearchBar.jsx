// src/components/SearchBar.jsx
import React, { useState } from 'react';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Pexels API 검색 로직은 나중에 구현
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for photos"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;