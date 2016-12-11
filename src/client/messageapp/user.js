import { Record, Map } from 'Immutable';

/*
  User: each user has a username
    username
    name
    iconpath
*/

class User extends Record({
  username: "",
  name: "",
  iconpath: ""
}) {

};

function isSameUser(first, second) {
  return first.get("username") == second.get("username");
}

export {
  User,
  isSameUser
};
