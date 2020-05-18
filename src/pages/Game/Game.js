import React from 'react';
import { connect } from 'react-redux';

import PlayableArea from '../../components/PlayableArea/PlayableArea';

const Game = (props) => {
  const { player, opponent } = props;

  const calculateWeight = (weight) => {
    let percent = '30%';
    switch (true) {
      case weight < 20:
        percent = '30%';
        break;
      case weight < 200:
        percent = '90%';
        break;
      default:
        break;
    }
    return percent;
  };

  return (
    <div className="Game">
      <PlayableArea aspectRatio={568 / 280} paddingWidth={0} paddingHeight={41}>
        <div className="container">
          <img
            src="images/stadium.png"
            alt="stadium"
            className="background-image"
          />
          <img
            className="player-pokemon-image"
            src={player.data.activePokemon.image}
            alt="pokemon"
            style={{ width: calculateWeight(player.data.activePokemon.weight) }}
          />
          <div className="player-name">{player.data.name}</div>
          <img
            className="opponent-pokemon-image"
            src={opponent.data.activePokemon.image}
            alt="pokemon"
            style={{
              width: calculateWeight(opponent.data.activePokemon.weight),
            }}
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
