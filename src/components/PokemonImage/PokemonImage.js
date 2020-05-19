import React from 'react';
import PropTypes from 'prop-types';

const PokemonImage = (props) => {
  const { pokemon } = props;
  const { weight, image } = pokemon;

  const calculateWeight = () => {
    let percent = 30;
    switch (true) {
      case weight < 20:
        percent = 30;
        break;
      case weight < 200:
        percent = 90;
        break;
      default:
        break;
    }
    return percent;
  };

  return (
    <div className="PokemonImage">
      <img
        className="image"
        src={image}
        alt="pokemon"
        style={{ width: `${calculateWeight()}%` }}
      />
      <div
        className="dropshadow"
        style={{
          height: `${calculateWeight() * 0.075}%`,
          width: `${calculateWeight() * 0.8}%`,
        }}
      />
    </div>
  );
};
export default PokemonImage;

PokemonImage.defaultProps = {
  pokemon: {
    weight: 30,
    image: '/images/bulbasaur.png',
  },
};

PokemonImage.propTypes = {
  pokemon: PropTypes.shape({
    weight: PropTypes.number,
    image: PropTypes.string,
  }),
};
