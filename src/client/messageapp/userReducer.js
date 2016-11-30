import { Map, List } from 'Immutable';

import { User } from './user.js';
import {
  create_ADD_USER,
  ACTION_ADD_USER
} from './userAction.js';

let defaultUser = Map({});

function addUser(state, username, name, iconPath) {
  return state.set(username,
    new User(username, name, iconpath)
  );
}

const users = (state = defaultUser, action) => {
  switch (action.type) {
    case ACTION_ADD_USER:
      return addUser(state,
        action.username,
        action.name,
        action.iconpath
      );
    default:
      return state;
  }
};

export {
  addUser,
  users
};
