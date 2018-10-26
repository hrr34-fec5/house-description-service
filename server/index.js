const express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
// *app.get
// *app.post
let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
