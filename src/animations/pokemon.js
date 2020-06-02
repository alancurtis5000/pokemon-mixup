import { TimelineLite, Power1 } from 'gsap';

class Pokemon {
  tlPlayerAttack = new TimelineLite();

  playerAttack = () => {
    this.tlPlayerAttack.to('.player-pokemon-image img', {
      rotateZ: -30,
      duration: 0.15,
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
      duration: 0.15,
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
  };
}

const pokemon = new Pokemon();
export default pokemon;
