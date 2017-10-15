'use strict'

import test from 'ava'
import geocoder from 'geocoder-geojson'
import starbucks from '.'

test('should return starbucks stores based on lat/lng passed', async t => {
  const { features } = await geocoder.google('MK3 3P6')
  const options = {
    lat: features[0].geometry.coordinates[0],
    lng: features[0].geometry.coordinates[1],
    city: features[0].properties.administrative_area_level_2,
    region: features[0].properties.administrative_area_level_1,
    country: features[0].properties.country
  }

  const res = await starbucks(options).then(res => res)

  t.true(res.length > 0)
})

test('should failed when missing arguments', async t => {
  const error = await t.throws(starbucks())
  t.is(error.message, 'Options are required')
})
