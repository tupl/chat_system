import React from 'react';
import { render } from 'react-dom';
import { MessageBoxComp } from './MessageBox.js';
import MessageContainerComp from './MessageContainer.js';

function sayHello(message) {
  console.log(message);
}

class App extends React.Component {

  render () {
    var messages = [{
      id: 0,
      content: "This is Tu Le"
    }];

    var size = {
      width: 400,
      height: 300
    };

    return (
      <div>
        <MessageContainerComp
          messages = {messages}
          size = {size}
          />
        <MessageBoxComp
          actMsgSubmit = {sayHello}
          />
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById("chatroom")
);
