import React from 'react';
import Header from '../../components/Header/Header';
import PokeCard from '../../components/PokeCard/PokeCard';

const Game = () => {
  const pageTitle = 'Game';
  return (
    <div className="Game">
      <Header pageTitle={pageTitle} />
      <PokeCard />
    </div>
  );
};
export default Game;
