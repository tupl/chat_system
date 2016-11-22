import React from 'react';
import Size from './size.js';
import { MessageComp } from './message.js';

// ===== Message Container Class =====
class MessageContainerComp extends React.Component {

  constructor(props) {
    super(props);

    var states = this.state = {};
    states.size = new Size(500, 400);
  }

  render() {
    return (
      <div id="MessageContainer"
        style={{
          width: this.state.size.getWidth(),
          height: this.state.size.getHeight()
        }}>
        <MessageComp content="Hello world" />
      </div>
    );
  }

}

export default MessageContainerComp;
