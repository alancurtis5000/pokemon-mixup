import React from 'react';
import PropTypes from 'prop-types';

const GameStats = (props) => {
  const { gameStats } = props;
  const { wins, turns } = gameStats;
  return (
    <div className="GameStats">
      <div className="wins">{`Round Won: ${wins}`}</div>
      <div className="wins">{`Pokeballs Left: ${turns}`}</div>
    </div>
  );
};
export default GameStats;

GameStats.defaultProps = {
  gameStats: {
    wins: 4,
    turns: 3,
  },
};

GameStats.propTypes = {
  gameStats: PropTypes.shape({
    wins: PropTypes.number,
    turns: PropTypes.number,
  }),
};
