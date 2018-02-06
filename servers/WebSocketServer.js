const ws = require('ws')
const Server = require('./Server')
const config = require('config')
module.exports = class WebSocketServer extends Server {
  constructor() {
    super('WebSocketServer', 'websocket')
  }

  enable() {
    this.ws = new ws.Server({
      port: this.config.port
    })
    ws.on('connection', this.onConnection)
  }
  
  onConnection(sock) {
    sock.on('message', (msg) => {
      
    })
  }
}