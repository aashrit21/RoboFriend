import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {setSearchfield, fetchingRobotsDisplay} from './reducer';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';

const logger= createLogger();
const rootReducer= combineReducers({setSearchfield,fetchingRobotsDisplay})
const store= createStore(rootReducer , applyMiddleware(thunk,logger));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
