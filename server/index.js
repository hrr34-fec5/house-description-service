const express = require('express');
let bodyParser = require('body-parser');
const houseDetail = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
// *app.get
 // app.post
app.post('/', function (req, res) {

  let newListing = new houseDetail({
    houseName: req.body.houseName,
    numberOfGuests: req.body.numberOfGuests,
    numberOfBedrooms: req.body.numberOfBedrooms,
    numberOfBeds: req.body.numberOfBeds,
    numberOfBaths: req.body.numberOfBaths,
    highlights: req.body.highlights,
    description : req.body.description,
    amenities: req.body.amenities,
    hostProfile: req.body.hostProfile,
    numberOfReviews: req.body.numberOfReviews,
    numberOfReferences: req.body.numberOfReferences,
    neighborhood: req.body.neighborhood
  });
  newListing.save(function (err) {
    if (err) return console.error(err);
    res.send(newListing)
  });
})

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// {
//   houseName: String,
//   numberOfGuests: Number,
//   numberOfBedrooms: Number,
//   numberOfBeds: Number,
//   numberOfBaths: Number,
//   Highlights: String,
//   description : String,
//   Amenities: String,
//   HostProfile: String,
//   numberOfReviews: Number,
//   numberOfReferences: Number,
//   Neighborhood: String
// }