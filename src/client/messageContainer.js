import React from 'react';
import Size from './size.js';

// ===== Message Container Class =====
class MessageContainer extends React.Component {

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
        Yes
      </div>
    );
  }

}

export default MessageContainer;
