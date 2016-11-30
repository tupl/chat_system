import { expect } from 'chai';
import { ChatConfig } from '../chatConnector.js';

describe("testChatConnector module", function() {

  describe("test ChatConfig class", function() {

    it("Test default initialization", function() {

      let cf = new ChatConfig();

      expect(cf.address)
        .to
        .equal("http://localhost");

      expect(cf.port)
        .to
        .equal(80);

    });

  });

  describe("test initialize with value", function() {

    let cf = new ChatConfig("123", 78);

    expect(cf.address)
      .to
      .equal("123");

    expect(cf.port)
      .to
      .equal(78);

  });

});
