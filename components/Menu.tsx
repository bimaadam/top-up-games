import { games } from '@/lib/data';
import React from 'react';

const Menu = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pilih Game Favorit</h2>
      
      {/* Tampilan Mobile */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-2 gap-4 px-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="card card-compact shadow-md relative rounded-badge"
            >
              {game.isNew && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                  New
                </div>
              )}
              <figure>
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover h-36 w-full rounded-badge"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-sm">{game.name}</h2>
                <a href='/pilih-item' className="btn btn-primary btn-sm w-full">
                  Top Up
                </a>
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
              {game.isNew && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                  New
                </div>
              )}
              <figure>
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover h-48 w-full rounded-badge"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{game.name}</h2>
                <p>{game.description}</p>
                <a href='/pilih-item' className="btn btn-primary">Top Up</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
