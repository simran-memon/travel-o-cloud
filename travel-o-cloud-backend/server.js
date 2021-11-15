const express = require('express')
const aws = require('aws-sdk');
const fs = require('fs');
var path = require('path');

//const cors = require('cors');

const app = express();
app.use(express.json());


var uploadPicture = require('./routes/uploadPicture')
var getLabels = require('./routes/getLabels')
var searchPicture = require('./routes/searchPicture')

  // CORS Headers => Required for cross-origin/ cross-server communication
  app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers',
                    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.setHeader('Access-Control-Allow-Methods',
                    'GET, POST, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });
  
    app.use('/uploadPicture', uploadPicture);
    app.use('/getLabels', getLabels);
    app.use('/searchPicture', searchPicture);
 
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//  app.post("/uploadPicture", (req, res) => {
//    res.send("my post method");
//  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;