import io from 'socket.io-client';

class SocketConfig {

  constructor(address = "http://localhost", port = 80) {
    this.address = address;
    this.port = port;
  }

}





export {
  SocketConfig
};
