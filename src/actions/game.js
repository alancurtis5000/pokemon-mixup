export const types = {
  START_GET_GAME: 'START_GET_GAME',
  END_GAME: 'END_GAME',
};

export const startGetGame = () => (dispatch) => {
  const payload = {};

  dispatch({
    type: types.START_GET_GAME,
    payload,
  });
};

export const wonGame = () => (dispatch) => {
  const payload = {
    data: {
      status: 'gameOver',
      how: 'won',
    },
  };

  dispatch({
    type: types.END_GAME,
    payload,
  });
};

export const lostGame = () => (dispatch) => {
  const payload = {
    data: {
      status: 'gameOver',
      how: 'lost',
    },
  };
  dispatch({
    type: types.END_GAME,
    payload,
  });
};
