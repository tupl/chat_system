import { Record, Map } from 'Immutable';
import { nextState } from '../util.js';

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

}

export {
  User
}
