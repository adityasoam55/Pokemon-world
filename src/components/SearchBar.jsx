import React, { useState } from 'react';

const SearchBar = ({ onSearch, initialValue = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery.trim());
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search Pokemon by name or ID..."
          className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar; 