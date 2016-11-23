import { Record, Map, List } from 'Immutable';

/*

  Enum:
    sending: If trying to sent to server
    sent: If already sent
    received: If receved from server
*/

class Message extends Record({
  id: -1,
  content: "",
  status: 'Sending'
}) {

}

export default Message
