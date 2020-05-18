export const types = {
  START_GET_PLAYER: 'START_GET_PLAYER',
};

export const startGetPlayer = () => (dispatch) => {
  const payload = {};

  dispatch({
    type: types.START_GET_PLAYER,
    payload,
  });
};
