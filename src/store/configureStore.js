import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import screenSizeReducer from '../reducers/screenSize';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      screenSize: screenSizeReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
