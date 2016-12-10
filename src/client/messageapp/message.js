import { Record, Map, List } from 'Immutable';

/*

  Enum:
    sending: If trying to sent to server
    sent: If already sent
    received: If receved from server
*/
const MESS_SENDING = 0;
const MESS_SENT = 1;
const MESS_RECEIVED = 2;

class Message extends Record({
  chatid: -1,
  serverid: -1, // Every message [chatid, serverid]
  id: -1, // This is the local id
  content: "",
  status: 'Sending'
}) {

}

export default Message
