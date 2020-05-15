import React from 'react';
import Header from '../../components/Header/Header';
import PlayableArea from '../../components/PlayableArea/PlayableArea';

const Game = () => {
  const pageTitle = 'Game';

  return (
    <div className="Game">
      <Header pageTitle={pageTitle} />
      <PlayableArea aspectRatio={568 / 280} paddingWidth={0} paddingHeight={41}>
        <div className="container">game goes here</div>
      </PlayableArea>
    </div>
  );
};
export default Game;
