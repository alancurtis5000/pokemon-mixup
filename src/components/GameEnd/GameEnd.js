import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TimelineLite } from 'gsap';
import { resetGame as resetGameAction } from '../../actions/game';

const GameEnd = (props) => {
  const { game, resetGame } = props;

  useEffect(() => {
    const tl = new TimelineLite();
    if (game.data.status === 'gameOver') {
      tl.set('.GameEnd', { x: '0%', duration: 0.01 });
      tl.to('.GameEnd', { opacity: 1, duration: 1 });
    } else {
      tl.to('.GameEnd', { opacity: 0, duration: 1 });
    }
  }, [game.data.status]);

  const handlePlayAgain = () => {
    console.log('handlePlayAgain');
    resetGame();
  };

  const offScreen = game.data.status !== 'gameOver' ? '-100%' : null;

  return (
    <div className="GameEnd" style={{ left: offScreen }}>
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
