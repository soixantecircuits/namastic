'use strict'

const names = require('../i18n/fname/europe.json')
const fs = require('fs')
const countries = require('i18n-iso-countries')
const _ = require('lodash')


for (let countryCode in names){
  let countryNames = names[countryCode]
  var country = countries.getName(countryCode, 'en')
  _.each(countryNames, function (el, index) {
    countryNames[index] = {name: el, gender: 'male', nationality: country}
  })
  fs.writeFile(`./i18n/fname/exports/${countryCode}.json`, JSON.stringify(countryNames, null, 2), (err) => {
    if (err) throw err
    console.log(`${countryCode} It\'s saved!`)
  })
}
