# starbucks-store-finder [![Build Status](https://travis-ci.org/bukinoshita/starbucks-store-finder.svg?branch=master)](https://travis-ci.org/bukinoshita/starbucks-store-finder)

> Starbucks store finder :coffee:

> Package renamed to `starbucks-store-finder` due trademark.


## Install

```
$ yarn add starbucks-store-finder
```


## Usage

```js
const starbucks = require('starbucks-store-finder')

const opts = { lat: '-23.585324', lng: '-46.286264,9z' }

await starbucks(opts)
// => [list, of, starbucks, stores, ...]
```


## API

### starbucks([options])

Returns a `promise`

#### options

Type: `object`<br/>
Required<br/>

Object must have `lat` and `lng` keys

#### lat

Type: `string`<br/>
Required

Latitude

#### lng

Type: `string`<br/>
Required

Longitude


## Related

- [starbucks-cli](https://github.com/bukinoshita/starbucks-cli) — Starbucks on Command Line


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
