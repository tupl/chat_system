import { expect } from 'chai';

import { User, isSameUser } from '../user.js';

describe("test User module", function() {

  it("Verifying default User", function() {

    var usr = new User();
    expect(usr.get("username")).to.equal("");
    expect(usr.get("name")).to.equal("");
    expect(usr.get("iconpath")).to.equal("");
  });

  it("Verifying same user", function() {
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
      "username": "sport"
    });

    expect(isSameUser(usr1, usr2)).to.be.true;
    expect(isSameUser(usr1, usr3)).to.not.be.true;
    expect(isSameUser(usr2, usr3)).to.not.be.true;
  });

  it("Verifying initializing User", function() {
    var usr = new User({
      "username": "music",
      "name": "I love music",
      "iconpath": "a path"
    });
    expect(usr.get("username")).to.equal("music");
    expect(usr.get("name")).to.equal("I love music");
    expect(usr.get("iconpath")).to.equal("a path");

  });

});
