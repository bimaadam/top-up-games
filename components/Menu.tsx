import { games } from '@/lib/data';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <div id='menu' className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pilih Game Favorit</h2>
      
     {/* Tampilan Mobile */}
<div className="block sm:hidden">
  <div className="grid grid-cols-2 gap-4 px-4">
    {games.map((game) => (
      <div
        key={game.id}
        className="card card-compact shadow-md relative rounded-badge"
      >
        {/* Flag New */}
        {game.isNew && (
          <div className="absolute top-28 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-badge z-10">
            New
          </div>
        )}

        <div className="relative">
          <figure>
            <img
              src={game.image}
              alt={game.name}
              className="object-cover h-36 w-full rounded-badge"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body shadow-md rounded-badge shadow-purple-400 absolute bottom-0 top-0 left-0 w-full p-4 bg-blue-950 bg-opacity-50 z-20">
            <h2 className="card-title font-bold text-sm text-white">{game.name}</h2>
            <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <a href='/pilih-item' className="btn btn-primary px-4">Top Up</a>
            </motion.button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Tampilan Desktop */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-4 gap-8 px-8 sm:px-12 lg:px-24">
          {games.map((game) => (
            <div
              key={game.id}
              className="card card-compact shadow-xl relative rounded-badge"
            >
              <div className="relative">
                {game.isNew && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-badge">
                    New
                  </div>
                )}
                <figure className="w-full">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="object-cover h-48 w-full rounded-badge"
                  />
                </figure>
                <div className="card-body p-4 bg-blue-950 bg-opacity-70 absolute top-36 left-0 w-full rounded-badge shadow-md">
                  <h2 className="card-title text-xl">{game.name}</h2>
                  <p>{game.description}</p>
                  <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <a href='/pilih-item' className="btn btn-primary px-9">Top Up</a>
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
