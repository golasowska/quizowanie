import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

import './index.css';
import App from './App';


const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware
  )
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,document.getElementById('root')
);
