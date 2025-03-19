import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, loading, onSelectPokemon }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!pokemons || pokemons.length === 0) {
    return (
      <div className="text-center py-12 bg-white/50 rounded-lg shadow">
        <p className="text-xl text-gray-600">No Pokémon found.</p>
        <p className="text-gray-500 mt-2">Try searching with a different name.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 rounded-lg p-4 sm:p-6 shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="flex justify-center">
            <PokemonCard 
              pokemon={pokemon} 
              onClick={onSelectPokemon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList; 