/*
MSG_POST = Post a message to the chat room, this message
  can come from user or come from someone else
MSG_SUBMIT = Submit a message from this user.
*/


// ====== Some actions for the messages ======
export const MSG_POST = 'MSG_POST'
export const MSG_SUBMIT = 'MSG_SUBMIT'


// ====== action creator ======

// creator for MSG_POST
export function create_MSG_POST(msg) {
  return {
    type: MSG_POST,
    msg
  }
}

// creator for MST_SUBMIT
export function create_MSG_SUBMIT(msg) {
  return {
    type: MSG_SUBMIT,
    msg
  }
}
