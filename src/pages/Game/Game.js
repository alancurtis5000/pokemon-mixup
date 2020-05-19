import React from 'react';
import { connect } from 'react-redux';
import PokemonStats from '../../components/PokemonStats/PokemonStats';
import GameStats from '../../components/GameStats/GameStats';
import PlayableArea from '../../components/PlayableArea/PlayableArea';
import PokemonImage from '../../components/PokemonImage/PokemonImage';

const Game = (props) => {
  const { player, opponent } = props;

  const attack = () => {
    console.log('attack');
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
          <div className="game-stats">
            <GameStats />
          </div>

          {/* Player */}
          <div className="player-pokemon-image">
            <PokemonImage pokemon={player.data.activePokemon} />
          </div>
          <div className="player-name">{player.data.name}</div>
          <div className="player-pokemon-stats">
            <PokemonStats pokemon={player.data.activePokemon} />
          </div>

          {/* Opponent */}
          <div className="opponent-pokemon-image">
            <PokemonImage pokemon={opponent.data.activePokemon} />
          </div>
          <div className="opponent-name">{opponent.data.name}</div>
          <div className="opponent-pokemon-stats">
            <PokemonStats pokemon={opponent.data.activePokemon} />
          </div>
          <div className="interface">
            <button type="button" className="attack" onClick={attack}>
              Attack
            </button>
          </div>
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
