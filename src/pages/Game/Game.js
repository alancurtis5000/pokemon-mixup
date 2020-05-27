import React from 'react';
import { connect } from 'react-redux';
import GameStart from '../../components/GameStart/GameStart';
import GamePlay from '../../components/GamePlay/GamePlay';
import GameEnd from '../../components/GameEnd/GameEnd';

const Game = () => {
  return (
    <div className="Game">
      <GameStart />
      <GameEnd />
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
