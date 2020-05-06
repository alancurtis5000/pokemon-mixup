export const types = {
  UPDATE_SCREEN_SIZE: 'UPDATE_SCREEN_SIZE',
};

export const updateScreenSize = (width, size) => (dispatch) => {
  const payload = {
    width,
    size,
  };
  dispatch({
    type: types.UPDATE_SCREEN_SIZE,
    payload,
  });
};
