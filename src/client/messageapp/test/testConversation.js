import { expect } from 'chai';

import  { Conversation } from '../conversation.js';
import { User } from '../user.js';
import { Message } from '../message.js';

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

  it("Verifying expectNextId", function() {

    var con = new Conversation(5);
    expect(con.getChatId()).to.equal(5);
    expect(con.setChatId(49)).to.equal(con);
    expect(con.getChatId()).to.equal(49);

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
