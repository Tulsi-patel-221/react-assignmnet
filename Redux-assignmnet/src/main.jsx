import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CounterApp from './CounterApp';

ReactDOM.render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById('root')
);
