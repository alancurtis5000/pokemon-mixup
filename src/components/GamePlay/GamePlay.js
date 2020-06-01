import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TimelineLite, Power1 } from 'gsap';
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
  const { player, opponent, attackOpponent, attackPlayer, game } = props;
  const [turn, setTurn] = useState('player');

  const tl = new TimelineLite();
  const animationAttackOpponent = () => {
    tl.to('.player-pokemon-image img', {
      rotateZ: -30,
      duration: 0.15,
      ease: Power1.easeOut,
    });
    tl.to('.player-pokemon-image img', {
      rotateZ: 40,
      duration: 0.2,
      ease: Power1.easeOut,
      delay: 0.2,
    });
    tl.to('.player-pokemon-image img', {
      rotateZ: 35,
      duration: 0.1,
    });
    tl.to('.player-pokemon-image img', {
      rotateZ: 38,
      duration: 0.1,
    });
    tl.to('.player-pokemon-image img', {
      rotateZ: 0,
      duration: 0.2,
      ease: Power1.easeOut,
    });
    tl.to('.opponent-pokemon-image img', {
      x: '2%',
      y: '3%',
      duration: 0.05,
    });
    tl.to('.opponent-pokemon-image img', {
      x: '-2%',
      y: '-1%',
      duration: 0.05,
    });
    tl.to('.opponent-pokemon-image img', {
      x: '2%',
      y: '-1%',
      duration: 0.05,
    });
    tl.to('.opponent-pokemon-image img', {
      x: '-1%',
      y: '1%',
      duration: 0.05,
    });
    tl.to('.opponent-pokemon-image img', {
      x: '0%',
      y: '0%',
      duration: 0.05,
    });
  };

  const animationAttackPlayer = () => {
    tl.to('.opponent-pokemon-image img', {
      rotateZ: 30,
      duration: 0.15,
      ease: Power1.easeOut,
    });
    tl.to('.opponent-pokemon-image img', {
      rotateZ: -40,
      duration: 0.2,
      ease: Power1.easeOut,
      delay: 0.2,
    });
    tl.to('.opponent-pokemon-image img', {
      rotateZ: -35,
      duration: 0.1,
    });
    tl.to('.opponent-pokemon-image img', {
      rotateZ: -38,
      duration: 0.1,
    });
    tl.to('.opponent-pokemon-image img', {
      rotateZ: 0,
      duration: 0.2,
      ease: Power1.easeOut,
    });
    tl.to('.player-pokemon-image img', {
      x: '2%',
      y: '3%',
      duration: 0.05,
    });
    tl.to('.player-pokemon-image img', {
      x: '-2%',
      y: '-1%',
      duration: 0.05,
    });
    tl.to('.player-pokemon-image img', {
      x: '2%',
      y: '-1%',
      duration: 0.05,
    });
    tl.to('.player-pokemon-image img', {
      x: '-1%',
      y: '1%',
      duration: 0.05,
    });
    tl.to('.player-pokemon-image img', {
      x: '0%',
      y: '0%',
      duration: 0.05,
    });
  };

  const attack = () => {
    setTurn('opponent');
    animationAttackOpponent();
    setTimeout(() => {
      attackOpponent();
    }, 1000);
    setTimeout(() => {
      animationAttackPlayer();
      setTimeout(() => {
        attackPlayer();
        setTurn('player');
      }, 1000);
    }, 1000);
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
            {turn === 'player' && game.data.status !== 'gameOver' ? (
              <button type="button" className="attack" onClick={attack}>
                Attack
              </button>
            ) : null}
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
    game: state.game,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);
