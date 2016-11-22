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
    return this.getId;
  }

  getUserId() {
    return this.userid;
  }

}
