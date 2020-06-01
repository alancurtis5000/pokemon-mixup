import cloneDeep from 'lodash/cloneDeep';
import { types } from '../actions/game';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    status: 'pending', // gameOver, inProgress
    how: '', // lost , won
    turn: 'player',
    balls: 3,
    roundsWon: 0,
  },
};

const gameReducer = (state = cloneDeep(initalState), action) => {
  const stateClone = cloneDeep(state);
  switch (action.type) {
    case types.END_GAME:
      console.log('End game');
      return {
        ...stateClone,
        data: {
          ...stateClone.data,
          ...cloneDeep(initalState),
          status: 'gameOver',
        },
      };
    case types.UPDATE_GAME_STAT:
      console.log('update game stat');
      console.log({ stateClone, pay: action.payload });
      return { ...stateClone, data: { ...stateClone.data, ...action.payload } };
    case types.RESET_GAME:
      console.log('reset game');
      return {
        ...stateClone,
        data: {
          ...stateClone.data,
          ...cloneDeep(initalState),
          status: 'pending',
        },
      };
    default:
      return stateClone;
  }
};

export default gameReducer;
