// import { resetOpponent } from './opponent';
import { resetPlayer } from './player';
import { resetOpponent } from './opponent';

export const types = {
  START_GET_GAME: 'START_GET_GAME',
  UPDATE_GAME_STAT: 'UPDATE_GAME_STAT',
  END_GAME: 'END_GAME',
  RESET_GAME: 'RESET_GAME',
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

export const roundWon = () => (dispatch, getState) => {
  const { game } = getState();
  const payload = {
    roundsWon: game.data.roundsWon + 1,
  };
  dispatch({
    type: types.UPDATE_GAME_STAT,
    payload,
  });
};

export const resetGame = () => (dispatch) => {
  dispatch(resetPlayer());
  dispatch(resetOpponent());
  dispatch({
    type: types.RESET_GAME,
  });
};
