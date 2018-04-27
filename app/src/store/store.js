import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/index';
import initialState from './initialState';

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const loggerMiddleware = createLogger();
const routeMiddleware = routerMiddleware(browserHistory);
const middlewares = [routeMiddleware, thunk, promiseMiddleware(), loggerMiddleware];


const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = syncHistoryWithStore(browserHistory, store);

/* Hot reloading of reducers. */
if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
