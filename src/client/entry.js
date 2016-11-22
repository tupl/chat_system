import React from 'react';
import { render } from 'react-dom';
import MessageContainerComp from './MessageContainer.js';

class App extends React.Component {
  render () {
    return <MessageContainerComp />
  }
}

render(
  <App/>,
  document.getElementById("chatroom")
);
