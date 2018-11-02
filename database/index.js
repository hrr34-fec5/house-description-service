const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/houseListings', { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', function(){
  console.log('Connection has been made.');
})
db.on('error', function(error){
  console.log('Connection error:', error);
})

var houseDetailsSchema = new mongoose.Schema({
  houseName: String,
  numberOfGuests: Number,
  numberOfBedrooms: Number,
  numberOfBeds: Number,
  numberOfBaths: Number,
  Highlights: String,
  description : String,
  Amenities: String,
  HostProfile: String,
  numberOfReviews: Number,
  numberOfReferences: Number,
  Neighborhood: String
});

var houseDetail = mongoose.model('houseDetail', houseDetailsSchema);

var singleHouseRetreival = function (houseID, callback) {

  console.log('singleHouseRetreival called');

  houseDetail.findOne({ houseName: houseID }, function (err, houseDetail) {
    callback(houseDetail);
  });
  //use mongo method to retreive the information
  //findOne()
  //return your callback with the results of the findOne()
};
module.exports.singleHouseRetreival = singleHouseRetreival;
module.exports.houseDetail = houseDetail;
/*
  console.log(houseDetail.findOne({ houseName: "Ducimus aut officiis qui voluptas rerum quaerat." }, function (err, adventure) {}));
--first step is making sure I can load data--
create my schema
create model
create function for creating

houseID

faker.random.number({'min': 10, 'max': 50});


--second step is how do I generate the fake data--

How is the generated data being stored into my component

*/