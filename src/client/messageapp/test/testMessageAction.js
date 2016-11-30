import { create_MSG_SUBMIT, ACTION_MSG_SUBMIT } from '../messageAction.js';
import { expect } from 'chai';

describe("testMessageAction module", function() {

  it("Expect ACTION_MSG_SUBMIT has correct value",
    function() {

      expect(ACTION_MSG_SUBMIT)
        .to
        .equal('ACTION_MSG_SUBMIT')

  });

  it("Expect create_MSG_SUBMIT follows correct format",
    function() {

      let mess = "This is a test case";
      let action = create_MSG_SUBMIT(mess);

      expect(action.type)
        .to
        .equal('ACTION_MSG_SUBMIT');

      expect(action.content)
        .to
        .equal(mess)

  });

});
