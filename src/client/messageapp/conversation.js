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
    this.sending = []; // messages are currenly sent. Not confirm
    this.mainUser = null;
    this.users = [];
    this.expectNextId = -1; // what is expected id of this messages
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
    return this;
  }

  getExpectNextId() {
    return this.expectNextId;
  }

  getMainUser() {
    return this.mainUser;
  }

  setMainUser(user) {
    this.mainUser = user;
    return this;
  }

  addReceivedMessage(message) {
    if (message.get("chatid") != this.chatid) return false;
    if (message.get("serverid") != this.expectNextId) return false;

    // discard that messsage from sending
    _discardSendingMessage(message.get("id"));

    this.messages.push(message);
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
