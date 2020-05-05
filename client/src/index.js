import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import themeReducer from './store/reducers/theme';
import tweetReducer from './store/reducers/tweets';
import authReducer from './store/reducers/auth';
import { watchTweets, watchAuth } from './store/saga/index';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  theme: themeReducer,
  tweets: tweetReducer,
  auth: authReducer,
});

const SagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(watchTweets);
SagaMiddleware.run(watchAuth);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
