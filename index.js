'use strict'

const got = require('got')

const apiUrl = 'https://www.starbucks.com/bff/locations'

module.exports = (opts = {}) => {
  return new Promise((resolve, reject) => {
    if (!opts.lat || !opts.lng) {
      return reject(new Error('Latitude and Longitude are required'))
    }

    const api = `${apiUrl}?lat=${opts.lat}&lng=${opts.lng}`

    got(api)
      .then(res => resolve(res.body))
      .catch(err => reject(new Error(err)))
  })
}
