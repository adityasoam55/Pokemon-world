import React from 'react';

const featuredPokemon = [
    {
      id: 25,
      name: 'pikachu',
      types: ['electric'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 6,
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      bgColor: 'bg-orange-100'
    },
    {
      id: 150,
      name: 'mewtwo',
      types: ['psychic'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
      bgColor: 'bg-pink-100'
    },
    {
      id: 149,
      name: 'dragonite',
      types: ['dragon', 'flying'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
      bgColor: 'bg-indigo-100'
    }
  ];

  const typeColors = {
    fire: 'bg-orange-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400',
    psychic: 'bg-pink-500',
    ice: 'bg-blue-300',
    dragon: 'bg-indigo-600',
    dark: 'bg-gray-700',
    fairy: 'bg-pink-300',
    normal: 'bg-gray-400',
    fighting: 'bg-red-600',
    flying: 'bg-indigo-400',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    rock: 'bg-yellow-700',
    bug: 'bg-lime-500',
    ghost: 'bg-purple-600',
    steel: 'bg-gray-500',
  };

function FeaturedPokemon() {
    return (
        <div>
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Pokemon</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredPokemon.map(pokemon => (
                            <div key={pokemon.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <div className={`${pokemon.bgColor} h-40 flex items-center justify-center`}>
                                    <img src={pokemon.image} alt={pokemon.name} className="h-32 w-32 object-contain" />
                                </div>
                                <div className="p-4">
                                    <div className="text-gray-500 text-sm mb-1">#{pokemon.id.toString().padStart(3, '0')}</div>
                                    <h3 className="text-xl font-bold capitalize mb-2">{pokemon.name}</h3>
                                    <div className="flex gap-2">
                                        {pokemon.types.map(type => (
                                            <span
                                                key={type}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${typeColors[type]} capitalize`}
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedPokemon;
