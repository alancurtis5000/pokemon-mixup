import { types } from '../actions/opponent';

const resetState = {
  isPending: false,
  error: '',
  data: {
    name: 'Mean Guy',
    activePokemon: {
      name: 'zip',
      hp: 33,
      currentHp: 33,
      attack: 5,
      image: '/images/bulbasaur.png',
      weight: 100,
    },
    pokemon: [
      {
        name: 'zip',
        hp: 36,
        attack: 10,
        image: '/images/bulbasaur.png',
        weight: 100,
      },
      {
        name: 'blip',
        hp: 88,
        attack: 2,
        image: '/images/bulbasaur.png',
        weight: 100,
      },
      {
        name: 'limber',
        hp: 3,
        attack: 3,
        image: '/images/bulbasaur.png',
        weight: 100,
      },
    ],
  },
};

export const initalState = {
  isPending: false,
  error: '',
  data: {
    name: 'Mean Guy',
    activePokemon: {
      name: 'zip',
      hp: 33,
      currentHp: 33,
      attack: 5,
      image: '/images/bulbasaur.png',
      weight: 100,
    },
    pokemon: [
      {
        name: 'zip',
        hp: 36,
        attack: 10,
        image: '/images/bulbasaur.png',
        weight: 100,
      },
      {
        name: 'blip',
        hp: 88,
        attack: 2,
        image: '/images/bulbasaur.png',
        weight: 100,
      },
      {
        name: 'limber',
        hp: 3,
        attack: 3,
        image: '/images/bulbasaur.png',
        weight: 100,
      },
    ],
  },
};

const opponentReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.ATTACK_OPPONENT:
      return { ...state, ...action.payload };
    case types.REPLACE_OPPONENT:
      return { ...state, ...action.payload };
    case types.RESET_OPPONENT:
      return { ...state, ...resetState };
    default:
      return state;
  }
};

export default opponentReducer;
