var thunkify = require('thunkify')

var modelFunctions = [
  "update"
  , "create"
  , "upsert"
  , "updateOrCreate"
  , "findOrCreate"
  , "exists"
  , "find"
  , "all"
  , "iterate"
  , "findOne"
  , "destroyAll"
  , "count"
]

var modelMethods = [
  "save"
  , "destroy"
  , "updateAttribute"
  , "updateAttributes"
  , "reload"
]

var schemaMethods = [
  "automigrate"
  , "autoupdate"
  , "isActual"
  , "disconnect"
]

module.exports = function (j) {
  var AbstractClass = j.AbstractClass
  var Schema = j.Schema

  modelFunctions.forEach(function (method) {
    AbstractClass[method] = thunkify(AbstractClass[method])
  })

  modelMethods.forEach(function (method) {
    AbstractClass.prototype[method] = thunkify(AbstractClass.prototype[method])
  })

  schemaMethods.forEach(function (method) {
    Schema.prototype[method] = thunkify(Schema.prototype[method])
  })

  return j
}
