import { Map, List } from 'Immutable';

import {  create_MSG_SUBMIT, ACTION_MSG_SUBMIT } from './actions.js';
import Message from './message.js';
import { User } from '../user/user.js';
import { nextState } from '../util.js';

let initialState = Map({
  messages: List.of(),
  size: Map({
    width: 400,
    height: 500
  }),
  users: Map({})
});

function addMessage(state, mess) {

  return nextState(
    state,
    'messages',
    function( messages) {
      var id = messages.count();

      return messages.push(
        new Message({
            id: id,
            content: mess
        })
      )
    }
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
