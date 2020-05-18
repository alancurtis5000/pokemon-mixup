import { types } from '../actions/player';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    name: 'Joe',
    activePokemon: {
      name: 'pik',
      hp: '23',
      attack: '23',
      image: '/images/bulbasaur.png',
      weight: 10,
    },
    score: 0,
    pokemon: [
      {
        name: 'pik',
        hp: '23',
        attack: '23',
        image: '/images/bulbasaur.png',
        weight: 10,
      },
      {
        name: 'blacka',
        hp: '10',
        attack: '20',
        image: '/images/bulbasaur.png',
        weight: 10,
      },
      {
        name: 'simmer',
        hp: '10',
        attack: '20',
        image: '/images/bulbasaur.png',
        weight: 10,
      },
    ],
  },
};

const playerReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.UPDATE_SCREEN_SIZE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default playerReducer;
