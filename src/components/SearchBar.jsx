import React from 'react';

const SearchBar = ({ placeholder, searchTerm, onSearch }) => {
  return (
    <div className="w-full md:w-auto mt-5">
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
