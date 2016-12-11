import { Map, List } from 'Immutable';

import { Message } from './message.js';

/*
  getNumberReceivedMessages() --> int
    return the number of received messages

  getNumberSendingMessages() --> int
    return the number of sending messages

  addReceivedMessage(message) --> bool
    add a receive message

  addSendingMessage(message) --> bool

  _discardSendingMessage(id) --> void
    based on id, we discard that sending message because its already accepted

  setExpectNextId(id) --> void
    set next expected id to receive

  getExpectNextId() --> int

  getMainUser() --> User

  setMainUser(user) --> void

  addUser(user) --> void

  getUsers() --> [User]

  getChatId() --> int

  setChatId(chatId) --> void

  getReceivedMessages() -->
    get a list of received messsages

  getSendingMessages() -->
    get a list of sending messages

*/

class Conversation {

  constructor(chatid) {
    this.chatid = chatid;
    this.messages = List.of([]); // this mesages are confimed with server
    this.sending = List.of([]); // messages are currenly sent. Not confirm
    this.mainUser = null;
    this.users = Map({});
    this.expectNextId = 0; // what is expected id of this messages
  }

  getNumberReceivedMessages() {
    return this.messages.size;
  }

  getNumberUsers() {
    return this.users.size;
  }

  // reset our expectNextId, by default it will 0
  setExpectNextId( expectNextId ) {
    this.expectNextId = expectNextId;
    return this
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

};

export {
  Conversation
};
