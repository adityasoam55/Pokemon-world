import React from 'react'
import { Link } from 'react-router-dom';

function AboutPokemon() {
    return (
        <div>
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="/images/Pokemons.webp"
                                alt="Ash and Pikachu"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
                                World Famous Pokemons are Alive Here!
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Pokémon is a Japanese media franchise that takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers. The franchise's primary target audience is children aged 5 to 12, but it is known to attract people of all ages.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport.
                            </p>
                            <Link
                                to="/pokedex"
                                className="inline-block bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors"
                            >
                                See More...
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPokemon;
