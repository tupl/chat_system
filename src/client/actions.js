/*
MSG_POST = Post a message to the chat room, this message
  can come from user or come from someone else
MSG_SUBMIT = Submit a message from this user.
*/


// ====== Some actions for the messages ======
const ACTION_MSG_SUBMIT = 'ACTION_MSG_SUBMIT'


// ====== action creator ======

// creator for MST_SUBMIT
function create_MSG_SUBMIT(msg) {
  return {
    type: ACTION_MSG_SUBMIT,
    content: msg
  }
}

export {
  create_MSG_SUBMIT,
  ACTION_MSG_SUBMIT
}
