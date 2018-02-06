const config = require('config')

/**
 * @typedef {Object} PresenceObject
 * @prop {String} details - Details text
 * @prop {String} state - State etxt
 * @prop {String} startTimestmap - Start timestamp of the presence
 * @prop {String} largeImageKey - Large image key
 * @prop {String} largeImageText - Large image text
 * @prop {String} smallImageKey - Small image key
 * @prop {String} smallImageText - Small image text
 */

class Integration {
  /**
   * Create a new Integration
   * @param {String} name - Integration name
   * @param {String} node - Config node
   */
  constructor(name = 'Integration', node = 'default') {
    /**
     * Integration name
     * @type {String}
     */
    this.name = name

    /**
     * Integration config node
     * @type {String}
     */
    this.node = node

    /**
     * Integration config
     * @type {Object}
     */
    this.config = config.get(`integrations.${this.node}`)

    /**
     * Integration's load status
     * @type {Boolean}
     */
    this.enabled = false

    /**
     * Integration handlers
     * @type {Object[]}
     */
    this.handlers = []

    if (this.config.enabled) {
      this.enable()
    }
  }

  enable() {
    this.enabled = true
  }

  disable() {
    this.enabled = false
  }
  
  registerHandler(name, callback) {
    this.handlers.push({
      name,
      callback
    })
  }

  clearHandlers() {
    this.handlers = []
  }

  /**
   * Get the presence (called every second automatically)
   * @type {PresenceObject}
   */
  getPresence() {
    return {
      details: 'Details',
      state: 'State',
      startTimestamp: Date.now(),
      largeImageKey: 'netflix',
      largeImageText: 'Large Image Text',
      smallImageKey: 'play',
      smallImageText: 'Small image text',
      instance: true
    }
  }
}

module.exports = Integration