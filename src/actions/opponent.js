import { wonGame } from './game';

export const types = {
  ATTACK_OPPONENT: 'ATTACK_OPPONENT',
  REPLACE_OPPONENT: 'REPLACE_OPPONENT',
  RESET_OPPONENT: 'RESET_OPPONENT',
};

const replacePokemon = () => (dispatch, getState) => {
  const { opponent } = getState();
  opponent.data.activePokemon = opponent.data.pokemon.shift();
  opponent.data.activePokemon.currentHp = opponent.data.activePokemon.hp;
  const payload = opponent;
  dispatch({
    type: types.REPLACE_OPPONENT,
    payload,
  });
};

export const attackOpponent = () => (dispatch, getState) => {
  const playerAttackDamgage = getState().player.data.activePokemon.attack;
  const { opponent } = getState();
  opponent.data.activePokemon.currentHp -= playerAttackDamgage;
  const payload = opponent;
  if (opponent.data.activePokemon.currentHp <= 0) {
    if (opponent.data.pokemon.length === 0) {
      dispatch(wonGame());
    } else {
      dispatch(replacePokemon());
    }
  } else {
    dispatch({
      type: types.ATTACK_OPPONENT,
      payload,
    });
  }
};

export const resetOpponent = () => (dispatch) => {
  dispatch({
    type: types.RESET_OPPONENT,
  });
};
