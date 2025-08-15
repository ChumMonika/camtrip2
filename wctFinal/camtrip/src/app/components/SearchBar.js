'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = "Search provinces, attractions, or experiences..." }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    // Optional: Real-time search
    if (onSearch && e.target.value.length > 2) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="search-section">
      <div className="container">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
