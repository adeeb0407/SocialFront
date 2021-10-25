import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore( rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Provider store={store} >
    <Main />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
