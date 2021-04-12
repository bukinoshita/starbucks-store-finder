'use strict'

import test from 'ava'
import starbucks from '.'

test('should return starbucks stores based on lat/lng passed', async t => {
  const options = { lat: '-23.585324', lng: '-46.286264,9z' }
  const res = await starbucks(options).then(res => res)

  t.true(res.length > 0)
})

test('should failed when missing arguments', async t => {
  const error = await t.throws(starbucks())
  t.is(error.message, 'Options are required')
})
