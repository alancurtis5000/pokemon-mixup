import React from 'react';
import PropTypes from 'prop-types';

const PokemonStats = (props) => {
  const { pokemon } = props;
  const { name, type, hp, attack, defense, weakness } = pokemon;
  return (
    <div className="PokemonStats">
      <div className="name">{name}</div>
      <div className="hp">{`Health: ${hp}`}</div>
      <div className="attack">{`Attack: ${attack}`}</div>
      <div className="type">{type}</div>
      <div className="defense">{defense}</div>
      <div className="weakness">{weakness}</div>
    </div>
  );
};
export default PokemonStats;

PokemonStats.defaultProps = {
  pokemon: {
    name: 'Pikachu',
    type: 'Electric',
    hp: 70,
    attack: 50,
    defense: 2,
    weakness: 'none',
    weight: 30,
  },
};

PokemonStats.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    hp: PropTypes.number,
    attack: PropTypes.number,
    defense: PropTypes.number,
    weakness: PropTypes.string,
    weight: PropTypes.number,
  }),
};
