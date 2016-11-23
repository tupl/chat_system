import React from 'react';
import Size from './size.js';
import { MessageComp } from './message.js';
import { Message } from './messageStore.js';

// ===== Message Container Class =====

/*
  Props:
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
          width: this.props.get('width'),
          height: this.props.get('width')
        }}>
        { messageRender }
      </div>
    );
  }

}

export default MessageContainerComp;
