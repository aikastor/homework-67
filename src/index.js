import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import passcode from "./store/passcode";
import calculator from "./store/calculator";
import {Provider} from "react-redux";

const  reducer = combineReducers({
  pass: passcode,
  calculator: calculator,
});

const store = createStore(reducer);

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
