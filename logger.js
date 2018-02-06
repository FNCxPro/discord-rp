/**
 * discord-rp
 * 
 * File...................logger.js
 * Created on.............Saturday, 13th January 2018 1:10:34 pm
 * Created by.............Relative
 * 
 */
const winston = require('winston')
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ]
})
module.exports = logger