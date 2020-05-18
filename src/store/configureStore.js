import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import screenSizeReducer from '../reducers/screenSize';
import gameReducer from '../reducers/game';
import opponentReducer from '../reducers/opponent';
import playerReducer from '../reducers/player';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      player: playerReducer,
      opponent: opponentReducer,
      game: gameReducer,
      screenSize: screenSizeReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
