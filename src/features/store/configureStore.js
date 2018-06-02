import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';

const middlewares = [ReduxThunk];

const enhancer = compose(
  applyMiddleware(...middlewares),
);

export function configureStore() {
  const store = createStore(() => {}, enhancer);
  return store;
}
