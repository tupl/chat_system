import React from 'react';
import Size from './size.js';
import { MessageComp } from './message.js';
import { Message, MsgStoreSglton } from './messageStore.js';

MsgStoreSglton.addMessage('hehe', 'Tu Le Dep trai');
MsgStoreSglton.addMessage('hehe', 'Tu Le Dep trai');
MsgStoreSglton.addMessage('hehe', 'Tu Le Dep trai');

// ===== Message Container Class =====

/*
  This class will require props:
    messages (required)
    size (required)
*/

class MessageContainerComp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var messageRender = this.props.messages.map(
      (message) =>
      <MessageComp key={message.id} content={message.content} />
    );

    return (
      <div id="MessageContainer"
        style={{
          width: this.props.size.width,
          height: this.props.size.height
        }}>
        { messageRender }
      </div>
    );
  }

}

export default MessageContainerComp;
