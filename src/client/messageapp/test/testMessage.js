import  {
  Message,
  MESS_SENDING,
  MESS_SENT,
  MESS_RECEIVED
} from '../message.js';
import { expect } from 'chai';

describe("test Message module", function() {

  it("Verifying default value", function() {
    expect(MESS_SENDING).to.equal(0);
    expect(MESS_SENT).to.equal(1);
    expect(MESS_RECEIVED).to.equal(2);
  });

  it("Verifying custom initialization of message class", function() {
    var obj = new Message({
      chatid: 5,
      serverid: 9,
      id: 7,
      username: "tule",
      content: "this is test",
      status: MESS_RECEIVED
    });
    expect(obj.chatid).to.equal(5);
    expect(obj.serverid).to.equal(9);
    expect(obj.id).to.equal(7);
    expect(obj.username).to.equal("tule");
    expect(obj.content).to.equal("this is test");
    expect(obj.status).to.equal(MESS_RECEIVED);
  });

  it("Verifying default initialization of message class",
    function() {
      var obj = new Message();
      expect(obj.chatid).to.equal(-1);
      expect(obj.serverid).to.equal(-1);
      expect(obj.id).to.equal(-1);
      expect(obj.content).to.equal("");
      expect(obj.status).to.equal(MESS_SENDING);
  });

});
