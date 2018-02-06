const express = require('express')
const Server = require('./Server')
const config = require('config')
const logger = require('../logger')
const bodyParser = require('body-parser')


module.exports = class WebServer extends Server {
  constructor() {
    super('WebServer', 'express')
  }

  enable() {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.post('/modules/csgo', (req, res) => {
      this.handle('csgo', req.body)
      res.status(200)
    })

    this.express.listen(this.config.port, () => logger.info(`WebServer running on port ${this.config.port}`))
  }

  register(event, callback) {
    this.express.get(event, (req, res) => callback(req, res))
  }
}