import { expect } from 'chai';

import  { Conversation } from '../conversation.js';
import { User } from '../user.js';
import { Message, MESS_SENDING } from '../message.js';

var usr1 = new User({
  "username": "music",
  "name": "I love music",
  "iconpath": "a path"
});

var usr2 = new User({
  "username": "music",
  "name": "I love",
  "iconpath": "a path"
});

var usr3 = new User({
  "username": "music"
});

var usr4 = new User({
  "username": "sport"
});

var usr5 = new User({
  "username": "sport"
});

var usr6 = new User({
  "username": "dance"
});

describe("test Conversation module", function() {

  it("Verifying isFromMainUser", function() {
    var con = new Conversation(0);

    expect(con.getChatId()).to.equal(0);

    expect(con.isFromMainUser(usr1)).to.be.false;

    expect(con.setMainUser(usr1)).to.equal(con);
    expect(con.getMainUser()).to.equal(usr1);

    expect(con.isFromMainUser(usr1)).to.be.true;
    expect(con.isFromMainUser(usr2)).to.be.true;
    expect(con.isFromMainUser(usr4)).to.be.false;
    expect(con.isFromMainUser(usr6)).to.be.false;
    expect(con.isFromMainUser(usr3)).to.be.true;
  });

  it("Verifying adding sending messages", function() {
    var con = new Conversation(0);

    var mess = new Message({
      chatid: -1,
      serverid: -1, // Every message [chatid, serverid]
      id: -1, // This is the local id, only valid if it comes from this user
      username: "",
      content: "",
      status: MESS_SENDING
    });

    expect(con.setMainUser(usr1)).to.be.equal(con);
    expect(con.getMainUser()).to.be.equal(usr1);

    expect(con.getNumberSendingMessages()).to.be.equal(0);
    expect(con.getSendingNextId()).to.be.equal(0);

    // added bad message
    expect(con.addSendingMessage({})).to.be.false;
    expect(con.getSendingNextId()).to.be.equal(0);

    expect(con.addSendingMessage(mess)).to.be.true;
    expect(con.getSendingNextId()).to.be.equal(1);
    expect(con.getNumberSendingMessages()).to.be.equal(1);

    var tmess = con.sending[0];
    expect(tmess.get("chatid")).to.be.equal(0);
    expect(tmess.get("id")).to.be.equal(0);
    expect(tmess.get("username")).to.be.equal("music");
    expect(tmess.get("status")).to.be.equal(MESS_SENDING);

    expect(con.addSendingMessage(mess)).to.be.true;
    expect(con.getSendingNextId()).to.be.equal(2);
    expect(con.getNumberSendingMessages()).to.be.equal(2);

    tmess = con.sending[1];
    expect(tmess.get("chatid")).to.be.equal(0);
    expect(tmess.get("id")).to.be.equal(1);
    expect(tmess.get("username")).to.be.equal("music");
    expect(tmess.get("status")).to.be.equal(MESS_SENDING);

    var mess2 = new Message({
      chatid: -1,
      serverid: -1, // Every message [chatid, serverid]
      id: -1, // This is the local id, only valid if it comes from this user
      username: "",
      content: "noway",
      status: MESS_SENDING
    });

    expect(con.addSendingMessage(mess2)).to.be.true;

    expect(con.discardSendingMessage(1)).to.be.equal(con);
    expect(con.getNumberSendingMessages()).to.be.equal(2);

    var testmess = con.sending[1];

    expect(testmess.get("content")).to.be.equal("noway");
    expect(testmess.get("id")).to.be.equal(2);

    testmess = con.sending[0];
    expect(testmess.get("id")).to.be.equal(0);

  });

  it("Verifying addSendingMessage & discardSendingMessage", function() {



  });

  it("Verifying expectNextId", function() {
    var con = new Conversation(5);
    expect(con.getChatId()).to.equal(5);
    expect(con.setChatId(49)).to.equal(con);
    expect(con.getChatId()).to.equal(49);
  });

  it("Verifying expectNextId", function() {
    var con = new Conversation(4);
    expect(con.getExpectNextId()).to.be.equal(-1);
    expect(con.setExpectNextId(9)).to.be.equal(con);
    expect(con.getExpectNextId()).to.be.equal(9);
  });

  it("Verifying addUser", function() {
    var con = new Conversation(5);
    expect(con.getNumberUsers()).to.be.equal(0);
    expect(con.setMainUser(usr1)).to.be.equal(con);
    expect(con.getNumberUsers()).to.be.equal(1);
    expect(con.getMainUser(usr1)).to.be.equal(usr1);

    expect(con.addUser(usr2)).to.be.false;
    expect(con.getNumberUsers()).to.be.equal(1);

    expect(con.addUser(usr4)).to.be.true;
    expect(con.getNumberUsers()).to.be.equal(2);

    expect(con.addUser(usr5)).to.be.false;
    expect(con.getNumberUsers()).to.be.equal(2);

    expect(con.addUser(usr6)).to.be.true;
    expect(con.getNumberUsers()).to.be.equal(3);

  });

  it("Verifying main user and getNumberUsers", function() {
    var con = new Conversation(7);
    expect(con.getMainUser()).to.be.null;

    var userOne = new User({
      username: "rogue",
      name: "Rogue Knight",
      iconpath: ""
    });

    expect(con.setMainUser(userOne)).to.equal(con);
    expect(con.getMainUser()).to.equal(userOne);
    expect(con.getNumberUsers()).to.equal(1);
    expect(con.setMainUser(usr1)).to.equal(con);
    expect(con.getMainUser()).to.equal(usr1);
    expect(con.getNumberUsers()).to.equal(1);
  });

});
