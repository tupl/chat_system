/*
  private:
    - userid: who type this message
    - id: incremental id
    - text: the content of this message
*/

class Message {

  constructor(userid, id, text) {
    this.userid = userid;
    this.id = id;
    this.text = text;
  }

  getContent() {
    return this.text;
  }

  getId() {
    return this.id;
  }

  getUserId() {
    return this.userid;
  }

}

/*
  The purpose of MessageStore is to keep track
    the conversation of this messages
*/
class MessageStore {

  constructor() {
    this.stores = [];
  }

  getNumberOfMessages() {
    return this.stores.length;
  }

  addMessage(userid, content) {
    var newId = this.stores.length;
    this.stores.push(new Message(userid, newId, content));
  }

  getAllMessages() {
    return this.stores;
  }

}

let MsgStoreSglton = new MessageStore();

export {
  Message, MsgStoreSglton
}
