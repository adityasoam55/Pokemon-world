import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import PokemonDetail from './components/PokemonDetail';
import { fetchPokemons, searchPokemons } from './services/api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  const pokemonsPerPage = 20;

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (searchQuery) {
          // If searching, use search API
          const searchResults = await searchPokemons(searchQuery);
          setPokemons(searchResults);
          setTotalPages(1); // Search results are on one page
          setIsSearching(true);
        } else {
          // If not searching, use pagination API
          const offset = (currentPage - 1) * pokemonsPerPage;
          const data = await fetchPokemons(pokemonsPerPage, offset);
          setPokemons(data.results);
          setTotalPages(Math.ceil(data.count / pokemonsPerPage));
          setIsSearching(false);
        }
      } catch (err) {
        setError('Failed to load Pokémon data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, [currentPage, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    // Add overflow hidden to body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedPokemon(null);
    // Restore overflow when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Handle escape key to close detail view
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedPokemon) {
        handleCloseDetail();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedPokemon]);

  return (
    <div className="min-h-screen bg-pattern py-8 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center py-4">
          <h1 className="text-4xl font-bold text-blue-600 mb-3 text-shadow">Pokémon World</h1>
          <p className="text-lg text-gray-600">Search for your favorite Pokémon</p>
        </header>

        <div className="mb-10">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-8 card-shadow" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="mt-6 card-shadow rounded-lg overflow-hidden">
          <PokemonList 
            pokemons={pokemons} 
            loading={loading} 
            onSelectPokemon={handleSelectPokemon}
          />
        </div>

        {!isSearching && !loading && pokemons.length > 0 && (
          <div className="mt-8 mb-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}

        {selectedPokemon && (
          <PokemonDetail 
            pokemon={selectedPokemon} 
            onClose={handleCloseDetail} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
