import React from 'react';
import Size from './size.js';
import { MessageComp } from './message.js';
import { Message, MsgStoreSglton } from './messageStore.js';

MsgStoreSglton.addMessage('hehe', 'Tu Le Dep trai');
MsgStoreSglton.addMessage('hehe', 'Tu Le Dep trai');
MsgStoreSglton.addMessage('hehe', 'Tu Le Dep trai');

// ===== Message Container Class =====
class MessageContainerComp extends React.Component {

  constructor(props) {
    super(props);

    var states = this.state = {};
    states.size = new Size(500, 400);
  }

  render() {
    var allMessages = MsgStoreSglton.getAllMessages();

    console.log(allMessages)

    var messageRender = allMessages.map(
      function( message ) {
        var message_obj = (
          <MessageComp key={message.getId()} content={message.getContent()} />
        );
        return message_obj;
      }
    );

    return (
      <div id="MessageContainer"
        style={{
          width: this.state.size.getWidth(),
          height: this.state.size.getHeight()
        }}>
        { messageRender }
      </div>
    );
  }

}

export default MessageContainerComp;
