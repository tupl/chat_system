import {  create_MSG_SUBMIT, ACTION_MSG_SUBMIT } from './actions.js';
import Immutable;

let initialState = Immutable.Map({
  messages: Immutable.List.of(),
  size: Immutable.Map({
    width: 400,
    height: 500
  })
})

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_MSG_SUBMIT:
      return state;
    default:
      return state
  }
}

export default messageReducer
