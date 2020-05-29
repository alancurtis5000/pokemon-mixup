import React from 'react';
import { connect } from 'react-redux';
import { TimelineLite } from 'gsap';

const GameEnd = (props) => {
  const { game } = props;
  const tl = new TimelineLite();

  if (game.data.status === 'gameOver') {
    tl.to('.GameEnd', { x: '100%', duration: 0.01 });
    tl.to('.GameEnd', { opacity: 1, duration: 1 });
  }

  return <h1 className="GameEnd">Game Over {`${game.data.how}`}</h1>;
};

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};
export default connect(mapStateToProps)(GameEnd);
