export const types = {
  START_GET_GAME: 'START_GET_GAME',
};

export const startGetGame = () => (dispatch) => {
  const payload = {};

  dispatch({
    type: types.START_GET_GAME,
    payload,
  });
};
