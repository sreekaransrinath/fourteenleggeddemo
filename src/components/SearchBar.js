"use client";

import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    setQuery(value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleSearch}
      placeholder="Search..."
      className="w-full px-3 py-2 mb-5 border border-gray-300 rounded-md"
    />
  );
};

export default SearchBar;
