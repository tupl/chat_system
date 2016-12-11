import { expect } from 'chai';

import  { Conversation } from '../conversation.js';

import { User } from '../user.js';

import { Message } from '../message.js';

describe("test Conversation module", function() {

  it("Verifying expectNextId", function() {

    var con = new Conversation(5);
    expect(con.getChatId()).to.equal(5);
    expect(con.setChatId(49)).to.equal(con);
    expect(con.getChatId()).to.equal(49);

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

  });

});
