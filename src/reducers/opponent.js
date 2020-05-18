import { types } from '../actions/opponent';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    name: 'Mean Guy',
    activePokemon: {
      name: 'zip',
      hp: '2',
      attack: '2',
      image: '/images/bulbasaur.png',
      weight: 100,
    },
    pokemon: [
      {
        name: 'zip',
        hp: '2',
        attack: '2',
        image: '/images/bulbasaur.png',
        weight: 100,
      },
      {
        name: 'blip',
        hp: '1',
        attack: '2',
        image: '/images/bulbasaur.png',
        weight: 100,
      },
      {
        name: 'limber',
        hp: '3',
        attack: '3',
        image: '/images/bulbasaur.png',
        weight: 100,
      },
    ],
  },
};

const opponentReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.UPDATE_SCREEN_SIZE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default opponentReducer;
