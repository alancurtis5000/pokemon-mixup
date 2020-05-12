import React from 'react';
import PropTypes from 'prop-types';

const PokeCard = (props) => {
  const { name, type, hp, attack, defense, weakness } = props;
  return (
    <div className="PokeCard">
      <div className="name">{name}</div>
      <div className="type">{type}</div>
      <div
        className="image"
        style={{ height: '84px', width: '134px', backgroundColor: 'yellow' }}
      >
        Image
      </div>
      <div className="name">{hp}</div>
      <div className="type">{attack}</div>
      <div className="name">{defense}</div>
      <div className="type">{weakness}</div>
    </div>
  );
};
export default PokeCard;

PokeCard.defaultProps = {
  name: 'Pikachu',
  type: 'Electric',
  hp: 70,
  attack: 50,
  defense: 2,
  weakness: 'none',
};

PokeCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  weakness: PropTypes.string,
};
