import { lostGame } from './game';

export const types = {
  ATTACK_PLAYER: 'ATTACK_PLAYER',
  REPLACE_PLAYER: 'REPLACE_PLAYER',
};

const replacePokemon = () => (dispatch, getState) => {
  const { player } = getState();
  player.data.activePokemon = player.data.pokemon.shift();
  player.data.activePokemon.currentHp = player.data.activePokemon.hp;
  const payload = player;
  dispatch({
    type: types.REPLACE_PLAYER,
    payload,
  });
};

export const attackPlayer = () => (dispatch, getState) => {
  const opponentAttackDamgage = getState().opponent.data.activePokemon.attack;
  const { player } = getState();
  player.data.activePokemon.currentHp -= opponentAttackDamgage;
  const payload = player;
  if (player.data.activePokemon.currentHp <= 0) {
    console.log('replace pokemon');
    if (player.data.pokemon.length === 0) {
      dispatch(lostGame());
    } else {
      dispatch(replacePokemon());
    }
  } else {
    dispatch({
      type: types.ATTACK_PLAYER,
      payload,
    });
  }
};
