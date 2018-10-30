const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/houseListings');
var faker = require('faker')
// mongoose.Promise = global.Promise;
const db = mongoose.connection;


db.once('open', function(){
  console.log('Connection has been made.');
})
db.on('error', function(error){
  console.log('Connection error:', error);
})

var houseDetailsSchema = mongoose.Schema({
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
var count = 0
for(count; count < 100; count++){

  var testListing = new houseDetail({
    houseName: faker.lorem.sentence,
    numberOfGuests: faker.random.number({'min': 2, 'max': 5});,
    numberOfBedrooms: faker.random.number({'min': 1, 'max': 3});,
    numberOfBeds: faker.random.number({'min': 1, 'max': 3});,
    numberOfBaths: faker.random.number({'min': 1, 'max': 3});,
    Highlights: faker.lorem.sentence,
    description : faker.lorem.paragraphs,
    Amenities: faker.lorem.word,
    HostProfile: faker.lorem.paragraphs,
    numberOfReviews: faker.random.number({'min': 1, 'max': 10});,
    numberOfReferences: faker.random.number({'min': 1, 'max': 5});,
    Neighborhood: faker.lorem.paragraph
  });
  testListing.save()
}
module.exports = houseDetail;
/*
--first step is making sure I can load data--
create my schema
create model
create function for creating


faker.random.number({'min': 10, 'max': 50});


--second step is how do I generate the fake data--

How is the generated data being stored into my component

*/