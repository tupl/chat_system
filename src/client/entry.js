import React from 'react';
import { render } from 'react-dom';
import MessageContainer from './MessageContainer.js';

class App extends React.Component {
  render () {
    return <MessageContainer />
  }
}

render(
  <App/>,
  document.getElementById("chatroom")
);
