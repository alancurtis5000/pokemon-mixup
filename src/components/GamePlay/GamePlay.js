import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PokemonStats from '../PokemonStats/PokemonStats';
import GameStats from '../GameStats/GameStats';
import PlayableArea from '../PlayableArea/PlayableArea';
import PokemonImage from '../PokemonImage/PokemonImage';
import GameStart from '../GameStart/GameStart';
import GameEnd from '../GameEnd/GameEnd';

import { attackOpponent as attackOpponentAction } from '../../actions/opponent';
import { attackPlayer as attackPlayerAction } from '../../actions/player';

const GamePlay = (props) => {
  const [seconds, setSeconds] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const { player, opponent, attackOpponent, attackPlayer } = props;

  const attack = () => {
    attackOpponent();
  };

  const oppAttack = () => {
    attackPlayer();
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds >= 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="GamePlay">
      <PlayableArea aspectRatio={568 / 280} paddingWidth={0} paddingHeight={41}>
        <div className="container">
          {/* Start Count Down */}
          <GameStart time={seconds} isOpen={isActive} />
          {/* End game Screen */}
          <GameEnd />
          {/* game board */}
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
            <button type="button" className="attack" onClick={oppAttack}>
              Opp Attack
            </button>
          </div>
        </div>
      </PlayableArea>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  attackOpponent: () => dispatch(attackOpponentAction()),
  attackPlayer: () => dispatch(attackPlayerAction()),
  dispatch,
});

const mapStateToProps = (state) => {
  return {
    player: state.player,
    opponent: state.opponent,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);
