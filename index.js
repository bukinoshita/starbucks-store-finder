'use strict'

const cheerio = require('cheerio')
const request = require('request-promise-native')

module.exports = ({ lat, lng, city, region, country } = {}) => {
  const apiUrl = 'https://www.starbucks.com/store-locator'

  return new Promise((resolve, reject) => {
    if ((!lat || !lng, !city, !region, !country)) {
      return reject(new Error('Options are required'))
    }

    const api = `${apiUrl}?map=${lat},${lng}&place=${city},${region},${country}`

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
