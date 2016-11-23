import React from 'react';
import { render } from 'react-dom';
import { MessageBoxComp } from './MessageBox.js';
import MessageContainerComp from './MessageContainer.js';
import { connect } from 'react-redux';
import { create_MSG_SUBMIT } from './actions.js';

const mapStateToProps = (state) => {
  return {
    messages: state.get('messages'),
    size: state.get('size')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (mess) => {
      dispatch(create_MSG_SUBMIT(mess))
    }
  }
}

class MessageApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <MessageContainerComp
          messages = {this.props.messages}
          size = {this.props.size}
          />
        <MessageBoxComp
          actMsgSubmit = {this.props.postMessage}
          />
      </div>
    )
  }
}

MessageApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageApp);

export default MessageApp
