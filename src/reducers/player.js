import { types } from '../actions/player';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    name: 'Joe',
    activePokemon: {
      name: 'pik',
      hp: 23,
      currentHp: 23,
      attack: 23,
      image: '/images/bulbasaur.png',
      weight: 10,
    },
    score: 0,
    pokemon: [
      {
        name: 'cherry',
        hp: 30,
        attack: 10,
        image: '/images/bulbasaur.png',
        weight: 10,
      },
      {
        name: 'blacka',
        hp: 10,
        attack: 20,
        image: '/images/bulbasaur.png',
        weight: 10,
      },
      {
        name: 'simmer',
        hp: 10,
        attack: 20,
        image: '/images/bulbasaur.png',
        weight: 10,
      },
    ],
  },
};

const playerReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.ATTACK_PLAYER:
      return { ...action.payload };
    case types.REPLACE_PLAYER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default playerReducer;
