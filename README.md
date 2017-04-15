# starbucks [![Codeship Status for bukinoshita/starbucks](https://app.codeship.com/projects/2b359a90-0441-0135-d36c-6adab902adfa/status?branch=master)](https://app.codeship.com/projects/213418)

> Starbucks store finder :coffee:

## Install
```
$ npm install --save starbucks
```

## Usage
```js
import stabucks from 'stabucks'

const opts = {lat: -23.564431, lng: -46.654937}
starbucks(opts).then(stores => JSON.parse(stores))
// => List of stores...
```

## API
### starbucks(opts)

#### opts
Type: `object`<br/>
Required<br/>

Object must have `lat` and `lng` keys

#### lat
Type: `number` or `string`<br/>
Required

Latitude

#### lng
Type: `number` or `string`<br/>
Required

Longitude

## Related
- [starbucks-cli](https://github.com/bukinoshita/starbucks-cli) — Starbucks on Command Line

## License
[MIT](https://github.com/bukinoshita/starbucks/blob/master/LICENSE) &copy; Bu Kinoshita
