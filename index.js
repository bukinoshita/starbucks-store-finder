'use strict'

const cheerio = require('cheerio')
const request = require('request-promise-native')

module.exports = (opts = {}) => {
  const apiUrl = 'https://www.starbucks.com/store-locator'

  return new Promise((resolve, reject) => {
    if (!opts.lat || !opts.lng) {
      return reject(new Error('Latitude and Longitude are required'))
    }

    const api = `${apiUrl}?map=${opts.lat},${opts.lng}`

    request(api).then(res => {
      if (res) {
        const $ = cheerio.load(res)
        const json = JSON.parse($('#bootstrapData').text())
        const stores = json.storeLocator.locationState.locations

        resolve(stores)
      }

      reject(
        new TypeError(`Couldn't find any Starbucks store on this location`)
      )
    })
  })
}
