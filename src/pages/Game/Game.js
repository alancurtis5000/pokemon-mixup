import React from 'react';
import { connect } from 'react-redux';

import PlayableArea from '../../components/PlayableArea/PlayableArea';

const Game = (props) => {
  const { player, opponent } = props;
  return (
    <div className="Game">
      <PlayableArea aspectRatio={568 / 280} paddingWidth={0} paddingHeight={41}>
        <div className="container">
          <img
            className="player-pokemon-image"
            src={player.data.activePokemon.image}
            alt="pokemon"
            style={{ height: '100px', width: '100px' }}
          />
          <div className="player-name">{player.data.name}</div>
          <img
            className="opponent-pokemon-image"
            src={opponent.data.activePokemon.image}
            alt="pokemon"
            style={{ height: '100px', width: '100px' }}
          />
          <div className="opponent-name">{opponent.data.name}</div>
        </div>
      </PlayableArea>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    opponent: state.opponent,
  };
};
export default connect(mapStateToProps)(Game);
