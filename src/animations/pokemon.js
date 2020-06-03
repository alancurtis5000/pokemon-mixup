import { TimelineLite, Power1 } from 'gsap';

class Pokemon {
  tlPlayerAttack = new TimelineLite();

  playerAttack = () => {
    this.tlPlayerAttack.to('.player-pokemon-image img', {
      rotateZ: -30,
      duration: 0.4,
      ease: Power1.easeOut,
    });
    this.tlPlayerAttack.to('.player-pokemon-image img', {
      rotateZ: 40,
      duration: 0.2,
      ease: Power1.easeOut,
      delay: 0.2,
    });
    this.tlPlayerAttack.to('.player-pokemon-image img', {
      rotateZ: 35,
      duration: 0.1,
    });
    this.tlPlayerAttack.to('.player-pokemon-image img', {
      rotateZ: 38,
      duration: 0.1,
    });
    this.tlPlayerAttack.to('.player-pokemon-image img', {
      rotateZ: 0,
      duration: 0.2,
      ease: Power1.easeOut,
    });
  };

  tlOpponentAttack = new TimelineLite();

  opponentAttack = () => {
    this.tlOpponentAttack.to('.opponent-pokemon-image img', {
      rotateZ: 30,
      duration: 0.4,
      ease: Power1.easeOut,
    });
    this.tlOpponentAttack.to('.opponent-pokemon-image img', {
      rotateZ: -40,
      duration: 0.2,
      ease: Power1.easeOut,
      delay: 0.2,
    });
    this.tlOpponentAttack.to('.opponent-pokemon-image img', {
      rotateZ: -35,
      duration: 0.1,
    });
    this.tlOpponentAttack.to('.opponent-pokemon-image img', {
      rotateZ: -38,
      duration: 0.1,
    });
    this.tlOpponentAttack.to('.opponent-pokemon-image img', {
      rotateZ: 0,
      duration: 0.2,
      ease: Power1.easeOut,
    });
  };

  tlOpponentHit = new TimelineLite();

  opponentHit = () => {
    this.tlOpponentHit.to('.opponent-pokemon-image img', {
      x: '2%',
      y: '3%',
      duration: 0.05,
    });
    this.tlOpponentHit.to('.opponent-pokemon-image img', {
      x: '-2%',
      y: '-1%',
      duration: 0.05,
    });
    this.tlOpponentHit.to('.opponent-pokemon-image img', {
      x: '2%',
      y: '-1%',
      duration: 0.05,
    });
    this.tlOpponentHit.to('.opponent-pokemon-image img', {
      x: '-1%',
      y: '1%',
      duration: 0.05,
    });
    this.tlOpponentHit.to('.opponent-pokemon-image img', {
      x: '0%',
      y: '0%',
      duration: 0.05,
    });
    this.tlOpponentHit.to('.opponent-pokemon-image img', {
      x: '0%',
      y: '0%',
      duration: 0.75,
    });
  };

  tlPlayerHit = new TimelineLite();

  playerHit = () => {
    this.tlPlayerHit.to('.player-pokemon-image img', {
      x: '2%',
      y: '3%',
      duration: 0.05,
    });
    this.tlPlayerHit.to('.player-pokemon-image img', {
      x: '-2%',
      y: '-1%',
      duration: 0.05,
    });
    this.tlPlayerHit.to('.player-pokemon-image img', {
      x: '2%',
      y: '-1%',
      duration: 0.05,
    });
    this.tlPlayerHit.to('.player-pokemon-image img', {
      x: '-1%',
      y: '1%',
      duration: 0.05,
    });
    this.tlPlayerHit.to('.player-pokemon-image img', {
      x: '0%',
      y: '0%',
      duration: 0.05,
    });
    this.tlPlayerHit.to('.player-pokemon-image img', {
      x: '0%',
      y: '0%',
      duration: 0.75,
    });
  };

  tlOpponentDie = new TimelineLite();

  opponentDie = () => {
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      y: '-10%',
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      rotate: 90,
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      y: '0%',
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      y: '2%',
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      y: '0%',
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      y: '1%',
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image img', {
      y: '0%',
      duration: 0.1,
    });
    this.tlOpponentDie.to('.opponent-pokemon-image', {
      opacity: 0,
      duration: 0.2,
    });
  };

  tlPlayerDie = new TimelineLite();

  playerDie = () => {
    this.tlPlayerDie.to('.player-pokemon-image img', {
      y: '-10%',
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image img', {
      rotate: -90,
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image img', {
      y: '0%',
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image img', {
      y: '2%',
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image img', {
      y: '0%',
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image img', {
      y: '1%',
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image img', {
      y: '0%',
      duration: 0.1,
    });
    this.tlPlayerDie.to('.player-pokemon-image', {
      opacity: 0,
      duration: 0.2,
    });
  };

  tlOpponentSpawn = new TimelineLite();

  opponentSpawn = () => {
    this.tlOpponentSpawn.set('.opponent-pokemon-image img', {
      y: '0%',
      rotateZ: 0,
    });
    this.tlOpponentSpawn.to('.opponent-pokemon-image', {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
  };

  tlPlayerSpawn = new TimelineLite();

  playerSpawn = () => {
    this.tlPlayerSpawn.set('.player-pokemon-image img', {
      y: '0%',
      rotateZ: 0,
    });
    this.tlPlayerSpawn.to('.player-pokemon-image', {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
  };
}

const pokemon = new Pokemon();
export default pokemon;
