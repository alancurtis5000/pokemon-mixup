import React from 'react';
import { connect } from 'react-redux';
import GamePlay from '../../components/GamePlay/GamePlay';

const Game = () => {
  return (
    <div className="Game">
      <GamePlay />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Game);
