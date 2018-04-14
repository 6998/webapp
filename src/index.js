import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import './style.scss';
import { setupCognito } from 'react-cognito';
import config from './aws.config.json'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

const history = createHistory();
const historyMiddleware = routerMiddleware(history)
const middleWare = applyMiddleware(thunkMiddleware, historyMiddleware)
const store = createStore(reducer, middleWare);

setupCognito(store, config);

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();



