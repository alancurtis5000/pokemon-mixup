import { types } from '../actions/game';

export const initalState = {
  isPending: false,
  error: '',
  items: [],
};

const gameReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.UPDATE_SCREEN_SIZE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default gameReducer;
