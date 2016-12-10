import { Map, List } from 'Immutable';

import {  create_MSG_SUBMIT, ACTION_MSG_SUBMIT } from './messageAction.js';
import { Message } from './message.js';
import { User } from './user.js';
import { combineReducers } from 'redux';
import { users } from './userReducer.js';

function addMessage(messages, mess) {
  var id = messages.count();
  return messages.push(
    new Message({
        id: id,
        content: mess
    })
  )
}

let defaultSize = Map({
  width: 400, height: 500
});

const size = (state = defaultSize, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const messages = (state = List.of(), action) => {
  switch (action.type) {
    case ACTION_MSG_SUBMIT:
      return addMessage(state, action.content);
    default:
      return state
  }
};

const logicReducer = combineReducers({
  users,
  messages,
  size,
})

export default logicReducer
