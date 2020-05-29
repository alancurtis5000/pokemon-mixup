import React from 'react';
import { TimelineLite } from 'gsap';

const GameStart = (props) => {
  const { time, isOpen } = props;

  const tl = new TimelineLite();

  if (!isOpen) {
    tl.to('.GameStart', { opacity: 0, duration: 1 });
    tl.to('.GameStart', { x: '-100%' });
  }

  const renderTime = () => {
    if (time === 0 || time === -1) {
      return 'GO!';
    }
    return time;
  };

  return <h1 className="GameStart">{renderTime()}</h1>;
};
export default GameStart;
