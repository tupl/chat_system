import React from 'react';

class MessageComp extends React.Component {

  constructor(props) {
    super(props);
    var states = this.state = {};
  }

  render() {
    return (
      <div>
        <h3 className="messageCls"> { this.props.content } </h3>
      </div>
    );
  }

}

export {
   MessageComp
}
