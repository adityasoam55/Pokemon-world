import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex w-full shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon by name..."
          className="flex-grow min-w-0 px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-8 py-3 transition-colors whitespace-nowrap text-sm sm:text-base font-medium"
        >
          Search
        </button>
      </form>
      {searchTerm && (
        <div className="text-right mt-2">
          <button
            onClick={() => {
              setSearchTerm('');
              onSearch('');
            }}
            className="text-sm text-blue-500 hover:text-blue-700 font-medium"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 