import React from 'react';

const pokemonTypes = [
    { name: 'fire', color: 'bg-orange-500' },
    { name: 'water', color: 'bg-blue-500' },
    { name: 'grass', color: 'bg-green-500' },
    { name: 'electric', color: 'bg-yellow-400' },
    { name: 'psychic', color: 'bg-pink-500' },
    { name: 'ice', color: 'bg-blue-300' },
    { name: 'dragon', color: 'bg-indigo-600' },
    { name: 'dark', color: 'bg-gray-700' },
    { name: 'fairy', color: 'bg-pink-300' },
    { name: 'normal', color: 'bg-gray-400' },
    { name: 'fighting', color: 'bg-red-600' },
    { name: 'flying', color: 'bg-indigo-400' },
    { name: 'poison', color: 'bg-purple-500' },
    { name: 'ground', color: 'bg-yellow-600' },
    { name: 'rock', color: 'bg-yellow-700' },
    { name: 'bug', color: 'bg-lime-500' },
    { name: 'ghost', color: 'bg-purple-600' },
    { name: 'steel', color: 'bg-gray-500' },
  ];

function TypesSection() {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pokemon Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemonTypes.map(type => (
              <div
                key={type.name}
                className={`${type.color} rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow`}
              >
                <p className="text-white font-medium capitalize">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TypesSection;
