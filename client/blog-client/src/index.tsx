import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
