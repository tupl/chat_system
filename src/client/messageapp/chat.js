/**
 *  User Story: Each conversation has a chatid,
 *  a list of users information.
 */
import { Map, List } from 'Immutable';

import Message from './message.js';

class Conversation {

  constructor(chatid) {
    this.chatid = chatid;
    this.messages = List.of([]); // this mesages are confimed with server
    this.sending = List.of([]); // messages are currenly sent. Not confirm
    this.users = Map({});
    this.expectNextId = 0; // what is expected id of this messages
  }

  getNumberMessages() {
    return this.messages.size;
  }

  getNumberUsers() {
    return this.users.size;
  }

  // reset our expectNextId, by default it will 0
  expectNextId( expectNextId ) {
    this.expectNextId = expectNextId;
  }

  addBackMessage(message) {
    if (message.id != this.expectNextId) return false;
    this.messages = this.messages.push(message);
    return true;
  }

  addUser(user) {
    this.users = this.users.set(user.get('username'), user);
    return this;
  }

}


export {
  Conversation,
};
