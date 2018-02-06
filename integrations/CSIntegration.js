const Integration = require('./Integration')

class CSIntegration extends Integration {
  constructor() {
    super('CSIntegration', 'csgo')

    this.presence = {}
  }
  enable() {
    this.enabled = true
    this.registerHandler('csgo', (body) => {
      const player = body.player
      const presence = {
        details: 'Counter-Strike: Global Offensive',
        state: 'State',
        largeImageKey: 'csgo',
        largeImageText: 'Counter-Strike: Global Offensive',
        smallImageKey: 'pause',
        smallImageText: '??',
        instance: true
      }
      if (this.config.esea) {
        presence.largeImageKey = 'esea'
        presence.largeImageText = 'Counter-Strike: Global Offensive ESEA Pug'
        presence.details = 'CS:GO - ESEA Pug'
      }
      if (player.activity === 'menu') {
        presence.state = 'In Menu'
        presence.smallImageText = 'In Menu'
      } else if (player.activity === 'playing') {
        //console.log(body)
        const team = player.team.toLowerCase()
        const opposing = team == 't' ? 'ct' : 't'
        presence.smallImageKey =  team
        presence.smallImageText = team == 't' ? 'Terrorist' : 'Counter-Terrorist'
        presence.state = `@ ${body.map.name} - (${team}) ${body.map['team_' + team].score} - ${body.map['team_' + opposing].score} (${opposing})`
      }
      this.presence = presence
    })
  }

  getPresence() {
    return this.presence
  }
}

module.exports = CSIntegration