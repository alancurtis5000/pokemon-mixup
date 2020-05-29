import React from 'react';
import { connect } from 'react-redux';
import { TimelineLite } from 'gsap';
import { resetGame as resetGameAction } from '../../actions/game';

const GameEnd = (props) => {
  const { game, resetGame } = props;
  const tl = new TimelineLite();

  if (game.data.status === 'gameOver') {
    tl.to('.GameEnd', { x: '100%', duration: 0.01 });
    tl.to('.GameEnd', { opacity: 1, duration: 1 });
  }

  const handlePlayAgain = () => {
    console.log('handlePlayAgain');
    resetGame();
  };

  return (
    <div className="GameEnd">
      <h1 className="text">Game Over {`${game.data.how}`}</h1>
      <div className="buttons">
        <button type="button" onClick={handlePlayAgain}>
          Play Again
        </button>
        <button type="button">High Scores</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGameAction()),
  dispatch,
});

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameEnd);
