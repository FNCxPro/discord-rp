const Integration = require('./Integration')

class IdleIntegration extends Integration {
  constructor() {
    super('IdleIntegration', 'idle')
  }

  getPresence() {
    return {
      details: 'Online',
      state: 'Or maybe Idle? (Not playing a game)',
      largeImageKey: 'idle',
      largeImageText: 'You never know!',
      smallImageKey: 'pause',
      smallImageText: 'keybase.io/relative',
      instance: true
    }
  }
}

module.exports = IdleIntegration