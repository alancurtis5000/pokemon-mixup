import cloneDeep from 'lodash/cloneDeep';
import { types } from '../actions/game';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    status: 'pending', // gameOver, inProgress
    how: '', // lost , won
  },
};

const gameReducer = (state = cloneDeep(initalState), action) => {
  const stateClone = cloneDeep(state);
  switch (action.type) {
    case types.END_GAME:
      return { ...stateClone, ...cloneDeep(action.payload) };
    case types.RESET_GAME:
      return { ...stateClone, ...cloneDeep(initalState) };
    default:
      return stateClone;
  }
};

export default gameReducer;
