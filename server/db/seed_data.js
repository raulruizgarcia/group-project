// Mongo DB being used

// Server has a Mongo database called:
// local_information

// Basic information being stored is a collection called:
// locations
// which is like an array of objects
// Each object is a model, corresponding to a
// pub, restaurant or event

use local_information;
db.dropDatabase();

// If any dummy seed data is needed, add it here
// However, expecting to take info from user
// so can be set up blank

// // Set up some initial data
// // (Set up a suitable api_object for each of these:)
var newEvent = new NightOutEvent(api_object)
var newPub = new Pub(api_object)
var newRestaurant = new Restaurant(api_object)
//
// // Set up the data array
// var locationsArray = []
// locationsArray.push(newEvent)
// locationsArray.push(newPub)
// locationsArray.push(newRestaurant)
//
// // Insert the data array
// db.locations.insert(locationsArray);

// For now, make the collection blank
// with one object of dummy type, to be ignored
// This is in order to make the collection stick!
db.locations.insert([{type:"dummy"}]);
