import io from 'socket.io-client';

class SocketConfig {

  constructor(address = "http://localhost", port = 80) {
    this.address = address;
    this.port = port;
  }

}

/**
 * Response for connect with server.
 * Usage:
 *
 */
class SocketDriver {

  constructor() {
    this.config = null;
    this.socket = null;
    this.handlers = {};
  }

  _verifyConfig( cfg ) {
    return cfg && (cfg instanceof SocketConfig);
  }

  config(cfg) {
    if (_verifyConfig(cfg)) {
      this.config = cfg;
    }
    return this;
  }

  start() {
    // === need verify config here ===
    this.socket = io(this.config.address + ":" + this.config.port);

    this.socket.on('connection', function(skt) {

      var connect_functor = this.handlers['connection'];
      var disconnect_functor = this.handlers['disconnect'];

      // if connect
      if (connect_functor) connect_functor();

      // if disconnect
      if (disconnect_functor) {
        skt.on('disconnect', function() {
          disconnect_functor();
        });
      }

      // handler for each toptic not connection/disconection
      for (var topic in this.handlers) {
        if (topic == "connection" ||
            topic == "disconnect") continue;
        skt.on(topic, function(msg) {
          let myhandler = this.handlers[topic];
          myhandler(msg);
        });
      }

    });

    return this;
  }

  on(topic, functor) {
    this.handlers[topic] = functor;
    return this;
  }

}





export {
  SocketConfig,
  SocketDriver
};
