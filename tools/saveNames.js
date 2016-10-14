orderedNames = {}
_.each(rawNames, function(el, index){
  orderedNames[el['Region (year)']] = [
  el["No. 1"],
  el["No. 2"],
  el["No. 3"],
  el["No. 4"],
  el["No. 5"],
  el["No. 6"],
  el["No. 7"],
  el["No. 8"],
  el["No. 9"],
  el["No. 10"]
  ]
})

var cleanNames = _.mapKeys(orderedNames, function(values, key){
  return key.replace(/[\W\d_]*$/, '')
})