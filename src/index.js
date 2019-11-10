import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/reducer';
import {watchAction} from './store/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAction);

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
