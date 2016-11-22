import React from 'react';

class MessageComp extends React.Component {

  constructor(props) {
    super(props);
    var states = this.state = {};
  }

  render() {
    return (
      <div>
        <span className="messageCls"> { this.props.content } </span>
      </div>
    );
  }

}

export {
   MessageComp
}
