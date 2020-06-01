import { wonGame, roundWon } from './game';

export const types = {
  ATTACK_OPPONENT: 'ATTACK_OPPONENT',
  REPLACE_OPPONENT: 'REPLACE_OPPONENT',
  RESET_OPPONENT: 'RESET_OPPONENT',
};

const replacePokemon = () => (dispatch, getState) => {
  const { opponent } = getState();
  const opponentClone = { ...opponent };
  opponentClone.data.activePokemon = opponent.data.pokemon.shift();
  opponentClone.data.activePokemon.currentHp = opponent.data.activePokemon.hp;
  const payload = opponentClone;
  dispatch({
    type: types.REPLACE_OPPONENT,
    payload,
  });
};

export const attackOpponent = () => (dispatch, getState) => {
  const playerAttackDamgage = getState().player.data.activePokemon.attack;
  const { opponent } = getState();
  const opponentClone = { ...opponent };
  opponentClone.data.activePokemon.currentHp -= playerAttackDamgage;
  const payload = opponentClone;
  if (opponentClone.data.activePokemon.currentHp <= 0) {
    if (opponentClone.data.pokemon.length === 0) {
      dispatch(wonGame());
    } else {
      dispatch(replacePokemon());
      dispatch(roundWon());
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
