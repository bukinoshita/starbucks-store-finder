'use strict'

const cheerio = require('cheerio')
const request = require('request-promise-native')

module.exports = ({ lat, lng, city, region, country } = {}) => {
  const apiUrl = 'https://www.starbucks.com/store-locator'

  return new Promise((resolve, reject) => {
    if ((!lat || !lng)) {
      return reject(new TypeError('Options are required'))
    }

    const api = `${apiUrl}?map=${lat},${lng}&place=${city},${region},${country}`

    request(api).then(res => {
      if (res) {
        const $ = cheerio.load(res)
        const textNode = $('body > script').map((i, x) => x.children[0]).filter((i, x) => x && x.data.match(/window.__BOOTSTRAP/)).get(0);
        if(textNode) {
          const scriptText = textNode.data.split(/\r?\n|\r/);
          const jsonString = scriptText[1].replace(/window.__BOOTSTRAP =/g, "")
          const json = JSON.parse(jsonString)
          const stores = json.storeLocator.locationState.locations

          resolve(stores)
        }
      }

      reject(
        new TypeError(`Couldn't find any Starbucks store on this location`)
      )
    })
  })
}
