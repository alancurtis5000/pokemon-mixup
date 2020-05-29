import cloneDeep from 'lodash/cloneDeep';
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

const playerReducer = (state = cloneDeep(initalState), action) => {
  const stateClone = cloneDeep(state);
  switch (action.type) {
    case types.ATTACK_PLAYER:
      return { ...cloneDeep(action.payload) };
    case types.REPLACE_PLAYER:
      return { ...cloneDeep(action.payload) };
    case types.RESET_PLAYER:
      return { ...cloneDeep(initalState) };
    default:
      return stateClone;
  }
};

export default playerReducer;
