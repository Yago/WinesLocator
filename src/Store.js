import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/';

export const history = createHistory();

export function configureStore(deps = {}) {
  const routingMiddleware = routerMiddleware(history);

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(routingMiddleware),
    ),
  );
}

export default configureStore;
