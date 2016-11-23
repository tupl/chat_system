import React from 'react';
import { MessageComp } from './messageComp.js';

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
      message => <MessageComp key={message.get('id')}
          content={message.get('content')} />
    );

    return (
      <div id="MessageContainer"
        style={{
          width: this.props.size.get('width'),
          height: this.props.size.get('height')
        }}>
        { messageRender }
      </div>
    );
  }

}

export default MessageContainerComp;
