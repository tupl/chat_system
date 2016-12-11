import { Map, List } from 'Immutable';

import { Message } from './message.js';
import { isSameUser } from './user.js';

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
    this.messages = [] // this mesages are confimed with server
    this.sending = new Set(); // messages are currenly sent. Not confirm
    this.mainUser = null;
    this.users = [];
    this.expectNextId = 0; // what is expected id of this messages
  }

  getChatId() {
    return this.chatid;
  }

  setChatId(chatid) {
    this.chatid = chatid;
    return this;
  }

  getNumberReceivedMessages() {
    return this.messages.size;
  }

  getNumberUsers() {
    return ((this.mainUser)? 1 : 0) + this.users.length;
  }

  // reset our expectNextId, by default it will 0
  setExpectNextId( expectNextId ) {
    this.expectNextId = expectNextId;
    return this
  }

  getMainUser() {
    return this.mainUser;
  }

  setMainUser(user) {
    this.mainUser = user;
    return this;
  }

  addBackMessage(message) {
    if (message.id != this.expectNextId) return false;
    this.messages = this.messages.push(message);
    return true;
  }

  addUser(user) {
    if (this.mainUser && isSameUser(user, this.mainUser)) return false;
    for(const usr of this.users) {
      if (isSameUser(usr, user)) return false;
    }
    this.users.push(user);
    return true;
  }

};

export {
  Conversation
};
