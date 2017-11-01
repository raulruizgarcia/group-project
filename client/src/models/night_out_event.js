var NightOutEvent = function(input_object) {
  this.type = "event"

  // When saving an object to Mongo DB,
  // set the .mongo tag so that when it comes out again
  // we use the correct If statement branch in the constructor!
  var isFromMongoDB = (input_object._id) ? true : false

  if (isFromMongoDB) {
    // input_object must be from our Mongo DB API
    this._id = input_object._id
    this.name = input_object.name
    this.venue = input_object.venue
    this.town = input_object.town
    this.postcode = input_object.postcode
    this.tags = input_object.tags
    this.description = input_object.description
    this.latitude = input_object.latitude
    this.longitude = input_object.longitude
  } else {
    // input_object must be from external API
    this._id = null
    this.name = input_object.name
    this.venue = input_object.schedules[0].place.name
    this.town = input_object.town
    this.postcode = input_object.schedules[0].place.postal_code
    this.tags = input_object.tags
    this.description = input_object.descriptions[0].description
    this.latitude = input_object.schedules[0].place.lat
    this.longitude = input_object.schedules[0].place.lng
  }
}

// NightOutEvent.prototype.methodName = function() {
//   return null
// }

module.exports = NightOutEvent
