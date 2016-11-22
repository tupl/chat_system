import React from 'react';

/*
  private:
    - userid: who type this message
    - id: incremental id
    - text: the content of this message
*/

class Message {

  constructor(userid, id, text) {
    this.userid = userid;
    this.id = id;
    this.text = text;
  }

  getContent() {
    return this.text;
  }

  getId() {
    return this.getId;
  }

  getUserId() {
    return this.userid;
  }

}

class MessageComp extends React.Component {

  constructor(props) {
    super(props);
    var states = this.state = {};
  }

  render() {
    return (
      <div>
        <h2> { this.props.content } </h2>
      </div>
    );
  }

}

export {
   Message, MessageComp
}
