/*
  Purpose: Enter to submit a message.

  Required props
    - actions
      - actMsgSubmit

*/

import React from 'react';

class MessageBoxComp extends React.Component {

  handleType(event) {
    this.setState({inputText: event.target.value});
  }

  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };

    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (this.state.inputText.length == 0) return;
    this.props.actMsgSubmit( this.state.inputText );
    this.setState({inputText: ""});
  }

  render() {

    return (
      <div id="MessageBox">
        <input
          type = "text"
          value = {this.state.inputText}
          onChange = {this.handleType}/>
        <button type = "button"
          onClick = {this.handleSubmit}> Click me </button>
      </div>
    );
  }

}

export {
   MessageBoxComp
}
