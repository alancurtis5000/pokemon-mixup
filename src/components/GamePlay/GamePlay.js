import React, { useState, useEffect } from 'react';
import { TimelineLite } from 'gsap';
import { connect } from 'react-redux';
import PokemonStats from '../PokemonStats/PokemonStats';
import GameStats from '../GameStats/GameStats';
import PlayableArea from '../PlayableArea/PlayableArea';
import PokemonImage from '../PokemonImage/PokemonImage';
import GameStart from '../GameStart/GameStart';
import GameEnd from '../GameEnd/GameEnd';

import { attackOpponent as attackOpponentAction } from '../../actions/opponent';
import { attackPlayer as attackPlayerAction } from '../../actions/player';
import animPokemon from '../../animations/pokemon';

const GamePlay = (props) => {
  const [seconds, setSeconds] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const { player, opponent, attackOpponent, attackPlayer, game } = props;
  const [turn, setTurn] = useState('player');

  const attack = () => {
    // todo: keep eye on this make sure it works as expected.
    setTurn('opponent');
    if (
      player.data.activePokemon.attack >= opponent.data.activePokemon.currentHp
    ) {
      // opponent active died
      console.log(' opponent active died');
      if (opponent.data.pokemon.length === 0) {
        // game over. no more pokemon to fight
        console.log('game over. no more pokemon to fight');
      } else {
        // spawn new pokemon and attack
        console.log('spawn new pokemon and attack');
        if (
          opponent.data.activePokemon.attack >=
          player.data.activePokemon.currentHp
        ) {
          // player pokemon will die
          console.log('player pokemon will die');
          if (player.data.pokemon.length === 0) {
            // game is over player lost
            console.log('game is over player lost');
          } else {
            // spawn new player pokemon and set turn
            setTimeout(() => {
              attackOpponent();
            }, 500);
            setTimeout(() => {
              attackPlayer();
              setTurn('player');
            }, 1000);
            console.log('spawn new player pokemon and set turn');
          }
        } else {
          // play attack animtion and change turns
          setTimeout(() => {
            attackOpponent();
          }, 500);
          setTimeout(() => {
            attackPlayer();
            setTurn('player');
          }, 1000);
          console.log('play attack animtion and change turns');
        }
      }
    } else {
      // opponent lived now attack back
      console.log('opponent lived now attack back');
      setTimeout(() => {
        attackOpponent();
      }, 500);

      if (
        opponent.data.activePokemon.attack >=
        player.data.activePokemon.currentHp
      ) {
        // player pokemon will die
        console.log('player pokemon will die');
        if (player.data.pokemon.length === 0) {
          // game is over player lost
          console.log('game is over player lost');
          setTimeout(() => {
            attackPlayer();
            setTurn('player');
          }, 1000);
        } else {
          // spawn new player pokemon and set turn
          console.log('spawn new player pokemon and set turn');
          setTimeout(() => {
            attackPlayer();
            setTurn('player');
          }, 1000);
        }
      } else {
        // play attack animtion and change turns
        setTimeout(() => {
          attackPlayer();
          setTurn('player');
        }, 1000);
        console.log('play attack animtion and change turns');
      }
    }
  };

  const attack1 = () => {
    // todo: keep eye on this make sure it works as expected.
    setTurn('opponent');
    if (
      player.data.activePokemon.attack >= opponent.data.activePokemon.currentHp
    ) {
      // play opponent will die anim
      const tlAttackDie = new TimelineLite();
      tlAttackDie
        .add(animPokemon.playerAttack, 0)
        .add(animPokemon.opponentDie, 0.4);
      if (game.data.status === 'gameOver') {
        // game over don't spawn new pokemon
      } else {
        setTimeout(() => {
          animPokemon.opponentSpawn();
          attackOpponent();
          attackPlayer();
          setTurn('player');
          if (
            opponent.data.activePokemon.attack >=
            player.data.activePokemon.currentHp
          ) {
            console.log('player will die');
          } else {
            const tl2 = new TimelineLite();
            tl2
              .add(animPokemon.opponentAttack, 0)
              .add(animPokemon.playerHit, 0.4);
          }
        }, 3000);
      }
    } else {
      // regular attack
      const tl = new TimelineLite();
      tl.add(animPokemon.playerAttack, 0).add(animPokemon.opponentHit, 0.4);
      setTimeout(() => {
        attackOpponent();
      }, 1000);
      setTimeout(() => {
        const tl2 = new TimelineLite();
        tl2.add(animPokemon.opponentAttack, 0).add(animPokemon.playerHit, 0.4);
        setTimeout(() => {
          attackPlayer();
          setTurn('player');
        }, 1000);
      }, 1000);
    }
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
