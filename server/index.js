const express = require('express');
let bodyParser = require('body-parser');
const db = require('../database/index.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/home', function (req, res) {
  console.log('/home called');
  db.singleHouseRetreival(req.query.houseName, (data) => {
    res.send(data);
  });

//the purpose in the callback function is to do a response.send back to the client

});

let port = 3001;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


// {


    // res.send(houseDetail);
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