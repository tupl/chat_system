import { expect } from 'chai';
import { SocketConfig } from '../chatConnector.js';

describe("testChatConnector module", function() {

  describe("test SocketConfig class", function() {

    it("Test default initialization", function() {

      let cf = new SocketConfig();

      expect(cf.address)
        .to
        .equal("http://localhost");

      expect(cf.port)
        .to
        .equal(80);

    });

  });

  describe("test initialize with value", function() {

    let cf = new SocketConfig("123", 78);

    expect(cf.address)
      .to
      .equal("123");

    expect(cf.port)
      .to
      .equal(78);

  });

});
