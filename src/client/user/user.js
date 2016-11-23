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
}

// class UserStore extends Record({
//   users: Map({})
// }) {
//
//   getUser(username) {
//     return this.get('users').get(username);
//   }
//
//   addUser(username, name, iconpath) {
//     let newUser = new User({
//       username: username,
//       name: name,
//       iconpath: iconpath
//     })
//
//     let newUsersState = this.get('users').set(
//       username, newUser
//     )
//
//     return this.update('users', newUsersState);
//   }
// }



export {
  User
}
