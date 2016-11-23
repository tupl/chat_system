/*


*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MessageApp from './messageApp.js';
import messageReducer from './messageReducer.js';

let store = createStore(messageReducer)

render(
  <Provider store = {store} >
    <MessageApp />
  </Provider>,
  document.getElementById("chatroom")
);
