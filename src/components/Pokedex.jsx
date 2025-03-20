import React from 'react';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import PokemonDetail from './PokemonDetail';

const Pokedex = ({
  pokemons,
  loading,
  error,
  searchQuery,
  currentPage,
  totalPages,
  onSearch,
  onPageChange,
  onSelectPokemon,
  selectedPokemon,
  onCloseDetail
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>
        
        <SearchBar onSearch={onSearch} initialValue={searchQuery} />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <>
            <PokemonList pokemons={pokemons} onSelectPokemon={onSelectPokemon} />
            
            {!searchQuery && totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            )}
          </>
        )}
      </div>
      
      {selectedPokemon && (
        <PokemonDetail pokemon={selectedPokemon} onClose={onCloseDetail} />
      )}
    </div>
  );
};

export default Pokedex; 