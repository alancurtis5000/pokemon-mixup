import React, { useState } from 'react';

const GameStart = () => {
  const [time, setTime] = useState(3);

  const countDown = () => {
    setTimeout(() => {
      if (time <= 0) {
        console.log('start Game');
      } else {
        setTime(time - 1);
      }
    }, 1000);
  };
  return (
    <div className="GameStart">
      count down till game starts:{time}
      {countDown()}
    </div>
  );
};
export default GameStart;
