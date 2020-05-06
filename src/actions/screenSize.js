export const types = {
  UPDATE_SCREEN_SIZE: 'UPDATE_SCREEN_SIZE',
};

export const updateScreenSize = (width) => (dispatch) => {
  let size;
  switch (true) {
    case width > 1024:
      size = 'desktop';
      break;
    case width > 768:
      size = 'tablet';
      break;
    case width > 0:
      size = 'mobile';
      break;
    default:
      break;
  }
  const payload = {
    width,
    size,
  };
  dispatch({
    type: types.UPDATE_SCREEN_SIZE,
    payload,
  });
};
