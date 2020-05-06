import { types } from '../actions/screenSize';

const screenSizeReducerDefaultState = {
  width: 0,
  size: '',
};

const screenSizeReducer = (state = screenSizeReducerDefaultState, action) => {
  switch (action.type) {
    case types.UPDATE_SCREEN_SIZE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default screenSizeReducer;
