import React from 'react';
import { Link } from 'react-router-dom';

function Calltoaction() {
    return (
        <div>
            <section className="py-16 bg-red-500 text-white">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to become a Pokemon Master?</h2>
                    <p className="text-xl mb-8">Explore our complete Pokedex and learn about all your favorite Pokemon!</p>
                    <Link
                        to="/pokedex"
                        className="bg-white text-red-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg inline-block"
                    >
                        Explore Now
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Calltoaction;
