'use strict'

// https://en.wikipedia.org/wiki/Category:Arabic_feminine_given_names
// https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America
// https://en.wikipedia.org/wiki/List_of_most_popular_given_names#Europe

var fnameFr = require('./i18n/fname/fr.json')
var fnameAr = require('./i18n/fname/ar.json')
var nameFr = require('./i18n/name/fr.json')

var fname = [...fnameFr, ...fnameAr]

module.exports = {
  fname: fname,
  name: nameFr
}
