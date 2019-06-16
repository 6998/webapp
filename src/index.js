import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './styles/style.scss';
import { routerMiddleware } from 'react-router-redux';
import axios from "axios";
import history from './utils/history';
const historyMiddleware = routerMiddleware(history);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleWare = composeEnhancers(
  applyMiddleware(thunkMiddleware, historyMiddleware),
);
const store = createStore(reducer, middleWare);

axios.defaults.withCredentials = true;

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

export const AppHistory = history;
