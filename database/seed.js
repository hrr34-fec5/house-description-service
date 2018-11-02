var faker = require('faker');
var db = require('./index.js');
Promise = require('bluebird');

seedDataBase = () => {
  Promise.each(new Array(100), () => {
    var testListing = {};
    testListing.houseName = faker.lorem.sentence();
    testListing.numberOfGuests = faker.random.number({'min': 2, 'max': 5});
    testListing.numberOfBedrooms = faker.random.number({'min': 1, 'max': 3});
    testListing.numberOfBeds = faker.random.number({'min': 1, 'max': 3});
    testListing.numberOfBaths = faker.random.number({'min': 1, 'max': 3});
    testListing.Highlights = faker.lorem.sentence();
    testListing.description = faker.lorem.paragraphs();
    testListing.Amenities = faker.lorem.words();
    testListing.HostProfile = faker.lorem.paragraphs();
    testListing.numberOfReviews = faker.random.number({'min': 1, 'max': 10});
    testListing.numberOfReferences = faker.random.number({'min': 1, 'max': 5});
    testListing.Neighborhood = faker.lorem.paragraph();

    return db.houseDetail.create(testListing);
  }).then((data) => {console.log(data)})
}

seedDataBase();
// var count = 0
// for(count; count < 100; count++){

//   var testListing = new houseDetail({
//     houseName: faker.lorem.sentence,
//     numberOfGuests: faker.random.number({'min': 2, 'max': 5});,
//     numberOfBedrooms: faker.random.number({'min': 1, 'max': 3});,
//     numberOfBeds: faker.random.number({'min': 1, 'max': 3});,
//     numberOfBaths: faker.random.number({'min': 1, 'max': 3});,
//     Highlights: faker.lorem.sentence,
//     description : faker.lorem.paragraphs,
//     Amenities: faker.lorem.words,
//     HostProfile: faker.lorem.paragraphs,
//     numberOfReviews: faker.random.number({'min': 1, 'max': 10});,
//     numberOfReferences: faker.random.number({'min': 1, 'max': 5});,
//     Neighborhood: faker.lorem.paragraph
//   });
//   testListing.save()
// }

/*
Promises can allow you to wait for something to finishing happening
Then oncec that thing is done you can do a enxt thing

Create an array of objects each object is a new entry
I'm going to use a promise for each obj in this array save it to my database
and then when you are done saving it all, allow
bluebird - using promises
*/