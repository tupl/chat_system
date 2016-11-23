import Immutable from 'Immutable';

import {  create_MSG_SUBMIT, ACTION_MSG_SUBMIT } from './actions.js';
import Message from './message.js';

let initialState = Immutable.Map({
  messages: Immutable.List.of(),
  size: Immutable.Map({
    width: 400,
    height: 500
  })
})

function addMessage(state, mess) {
  let messages = state.get('messages');
  var id = messages.count();

  return state.update('messages',
    messages => messages.push(
      new Message({
          id: id,
          content: mess
      })
    )
  )

}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_MSG_SUBMIT:
      return addMessage(state, action.content);
    default:
      return state
  }
}

export default messageReducer