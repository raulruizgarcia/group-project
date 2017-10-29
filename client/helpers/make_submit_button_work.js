var postCodeRequestHelper = require("./post_code_request_helper")
var weatherRequestHelper = require("./weather_request_helper")
var restaurantRequestHelper = require("./restaurant_request_helper")
var pubDataHelper = require("./pub_data/pub_data_helper.js")
var displayWeather = require("../src/views/display_weather.js")
var displayRestaurants = require("../src/views/display_restaurants.js")

var submitButton = {
  addFunctionality: function(callback) {
    var button = document.getElementById("postcode-submit-button")
    var postcodeInput = document.getElementById("postcode-input")
    button.addEventListener("click", function() {
      var postcode = postcodeInput.value
      postCodeRequestHelper.getRequest(postcode, function(data) {

        restaurantRequestHelper.getRestaurantsByCoords(data.result.latitude, data.result.longitude, function(data) {
          console.log("restaurant info:", data.restaurants)
          displayRestaurants.render(data.restaurants)
        })

        var pubList = pubDataHelper.getPubsByCoords(data.result.latitude, data.result.longitude, 0.01)

        // console.log("Pub list: ", pubList)

        callback(pubList, data)

      })

      weatherRequestHelper.getCurrentWeatherByPostCode(postcode, function(data) {
        // console.log("weather data:", data)
        displayWeather.render(data);
      })

    })
  }
}

module.exports = submitButton
