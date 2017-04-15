'use strict'

import test from 'ava'
import starbucks from './../'

test('should return starbucks stores based on lat/lng passed', async t => {
  const opts = {lat: -23.564431, lng: -46.654937}
  const res = await starbucks(opts).then(res => JSON.parse(res))
  const {stores, coordinates} = res

  t.true(stores.length > 0)
  t.is(coordinates.lat, opts.lat)
  t.is(coordinates.lng, opts.lng)
})

test('should failed when missing arguments', async t => {
  const error = await t.throws(starbucks())
  t.is(error.message, 'Latitude and Longitude are required')
})
