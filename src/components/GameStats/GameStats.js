import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GameStats = (props) => {
  const { game } = props;
  const { roundsWon, balls } = game;
  return (
    <div className="GameStats">
      <div className="wins">{`Round Won: ${roundsWon}`}</div>
      <div className="wins">{`Pokeballs Left: ${balls}`}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { game: state.game.data };
};
export default connect(mapStateToProps)(GameStats);

GameStats.defaultProps = {
  game: {
    wins: 4,
    turns: 3,
  },
};

GameStats.propTypes = {
  game: PropTypes.shape({
    wins: PropTypes.number,
    turns: PropTypes.number,
  }),
};
