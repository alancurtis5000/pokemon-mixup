import { types } from '../actions/game';

export const initalState = {
  isPending: false,
  error: '',
  data: {
    status: 'pending', // gameOver, inProgress
    how: '', // lost , won
  },
};

const gameReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.END_GAME:
      return { ...state, ...action.payload };
    case types.RESET_GAME:
      return { ...state, ...initalState };
    default:
      return state;
  }
};

export default gameReducer;
