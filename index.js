/**
 * discord-rp
 * 
 * File...................index.js
 * Created on.............Saturday, 13th January 2018 1:04:11 pm
 * Created by.............Relative
 * 
 */
const config = require('config')
const drpc = require('discord-rich-presence')

const logger = require('./logger')

const _servers = require('./servers')
const _integrations = require('./integrations')

const client = drpc(config.get('clientId'))

const servers = {}
const integrations = []

function register(event, callback) {
  for (const [k, v] of Object.entries(servers)) {
    v.register(event, callback)
  }
}
function disable(name) {
  for (const int of integrations) {
    if (int.name == name) int.disable()
  }
}
function enable(name) {
  for (const int of integrations) {
    if (int.enabled) int.disable()
    if (int.name == name) int.enable()
  }
}

for(const [k,v] of Object.entries(_servers)) {
  const server = new v()
  server.on('event', (_mod, body) => {
    for (const int of integrations) {
      if (int.enabled && int.handlers.length > 0) {
        for (const handler of int.handlers) {
          if (handler.name === _mod) {
            handler.callback(body)
          }
        }
      }
    }
  })
  servers[k] = server
}

for (const [k, v] of Object.entries(_integrations)) {
  const int = new v()
  integrations.push(int)
  register(`/module/${int.node}/enable`, (req, res) => {
    enable(int.name)
    res.status(200).send()
  })
  register(`/module/${int.node}/disable`, (req, res) => {
    disable(int.name)
    res.status(200).send()
  })
}

const timer = setInterval(() => {
  /**
   * Rich Presence Update
   */
  for (const int of integrations) {
    if (!int.enabled) continue
    const presence = int.getPresence()
    client.updatePresence(presence)
  }
}, 1000)

logger.info(`DiscordRP is ready. ${Object.entries(servers).length -1} servers registered and ${integrations.length - 1} integrations registered.`)