import React from 'react';

const GameStart = (props) => {
  const { time } = props;

  return <h1 className="GameStart">{time}</h1>;
};
export default GameStart;
