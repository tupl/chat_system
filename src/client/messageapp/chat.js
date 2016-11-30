/**
 *  User Story: Each conversation has a chatid,
 *  a list of users information.
 */
import { Map, List } from 'Immutable';

import Message from './message.js';

class Conversation {

  constructor(chatid) {
    this.chatid = chatid;
    this.messages = List.of([]);
    this.backup = List.of([]);
    this.users = Map({});
    this.expectNextId = 0; // what is expected id of this messages
  }

  getNumberMessages() {
    return this.messages.size;
  }

  getNumberUsers() {
    return this.users.size;
  }

  expectNextId( id ) {
    this.expectNextId
  }

  addBackMessage(message) {
    if (message.id != this.expectNextId()) return false;
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
