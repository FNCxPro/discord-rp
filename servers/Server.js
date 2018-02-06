/**
 * discord-rp
 * 
 * File...................Server.js
 * Created on.............Saturday, 13th January 2018 1:07:44 pm
 * Created by.............Relative
 * 
 */
const logger = require('../logger')
const config = require('config')
const EventEmitter = require('events').EventEmitter
module.exports = class Server extends EventEmitter {
  constructor(name = 'DefaultServer', module = 'default') {
    super()
    /**
     * The server's name
     * @type {String}
     */
    this.name = name

    /**
     * The server's module in the config
     * @type {String}
     */
    this.module = module

    /**
     * The module's config
     * @type {Object}
     */
    this.config = config.get(`servers.${this.module}`)

    if (this.config.enabled) {
      this.enable()
      logger.info(`Enabled ${this.name}`)
    }
  }

  handle(mod, body) {
    this.emit('event', mod, body)
  }

  register(event, callback) {
    logger.warn(`${this.name}'s register method was not changed`)
  }

  /**
   * Call this method when the server is enabled
   */
  enable() {
    logger.warn(`${this.name}'s enable method was not changed`)
  }

  /**
   * Call this method when the server is disabled
   */
  disable() {
    logger.warn(`${this.name}'s disable method was not changed`)
  }
}