import cloneDeep from 'lodash/cloneDeep';
import { types } from '../actions/opponent';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    name: 'Mean Guy',
    activePokemon: {
      name: 'lippo',
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

const opponentReducer = (state = cloneDeep(initalState), action) => {
  const stateClone = cloneDeep(state);
  switch (action.type) {
    case types.ATTACK_OPPONENT:
      console.log({ initalState });
      return { ...stateClone, ...action.payload };
    case types.REPLACE_OPPONENT:
      return { ...stateClone, ...action.payload };
    case types.RESET_OPPONENT:
      return { ...stateClone, ...cloneDeep(initalState) };
    default:
      return stateClone;
  }
};

export default opponentReducer;
