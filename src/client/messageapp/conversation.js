import { Map, List } from 'Immutable';

import { Message, MESS_SENDING } from './message.js';
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
    this.sendingNextId = 0; // id for next sending
  }

  getChatId() {
    return this.chatid;
  }

  setChatId(chatid) {
    this.chatid = chatid;
    return this;
  }

  getNumberReceivedMessages() {
    return this.messages.length;
  }

  getNumberSendingMessages() {
    return this.sending.length;
  }

  getNumberUsers() {
    return ((this.mainUser)? 1 : 0) + this.users.length;
  }

  getSendingNextId() {
    return this.sendingNextId;
  }

  // reset our expectNextId, by default it will -1
  setExpectNextId(expectNextId) {
    this.expectNextId = expectNextId;
    return this;
  }

  getExpectNextId() {
    return this.expectNextId;
  }

  getMainUser() {
    return this.mainUser;
  }

  discardSendingMessage(id) {
    for(var i = 0; i < this.sending.length; ++i) {
      var mess = this.sending[i];
      if (mess.get("id") == id) {
        this.sending.splice(i, 1);
        break;
      }
    }
    return this;
  }

  addSendingMessage(message) {
    // assume we have this.chatid and this.mainUser
    if (!(message instanceof Message)) return false;

    var mess = message.set("id", this.sendingNextId)
      .set("username", this.mainUser.get("username"))
      .set("chatid", this.chatid)
      .set("status", MESS_SENDING);

    this.sending.push(mess);
    ++ this.sendingNextId;
    return true;
  }

  setMainUser(user) {
    this.mainUser = user;
    return this;
  }

  isFromMainUser(user) {
    if (!this.mainUser) return false;
    return isSameUser(user, this.mainUser);
  }

  addReceivedMessage(message) {
    if (message.get("chatid") != this.chatid) return false;
    if (message.get("serverid") != this.expectNextId) return false;

    // discard that messsage from sending
    discardSendingMessage(message.get("id"));

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
