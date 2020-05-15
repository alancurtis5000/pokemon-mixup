import React from 'react';
import PlayableArea from '../../components/PlayableArea/PlayableArea';

const Game = () => {
  return (
    <div className="Game">
      <PlayableArea aspectRatio={568 / 280} paddingWidth={0} paddingHeight={41}>
        <div className="container">game goes here</div>
      </PlayableArea>
    </div>
  );
};
export default Game;
