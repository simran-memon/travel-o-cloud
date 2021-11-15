var express = require('express');
var router = express.Router();
var aws      =require('aws-sdk');
var multer   =require('multer');
var multers3 =require('multer-s3');

const fileUpload = require('express-fileupload');
bodyParser = require('body-parser');

var uname =''

const ID = '';
const SECRET = '';
const BUCKET_NAME = 'travel-o-cloud-1';

const s3 = new aws.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

/*const rekognition = new aws.Rekognition({
  apiVersion: '2016-06-27',
  region: "us-west-2",
  accessKeyId: ID,
  secretAccessKey: SECRET
});*/

router.use(bodyParser.json());

var upload= multer({
  storage:multers3({
    s3:s3,
    bucket:BUCKET_NAME,
    acl:'public-read',
    destination: function (req, file, cb) {
            console.log("destination")
            console.log(req.body)
            cb(null, '/')
        },
    metadata: function(req,file,callback){
  
      callback(null,{fieldName:file.fieldname});
    },
    key:function(req,file,callback){
      console.log("key")
      console.log(req.body)
      console.log(uname)
      callback(null,"uploads/"+file.originalname)
    }
  }),
  limits: {
    fileSize: 10000000    //Max limit of file that will be accepted is 10MB
  }
  });

 router.post("/", async function(req, res){  
  let uploadStatus = false, message="Cannot upload file"
  
  try {
    let {filename, username, trip} = req.body;

    uname=username
    //let middleware = upload.single('file')
    //middleware(req, res, controller);
  
    // console.log("My filename "+filename)
    // console.log("My username "+username)
    // console.log("My trip "+trip)
 
    // let dateUploaded = new Date().toLocaleString()
    // console.log("My trip "+dateUploaded)
    let bucketFileName;
    if (req.file) {
        bucketFileName = req.file.key;
    }
  //  console.log(bucketFileName)
    uploadStatus = true
    message = "File upload is successful"
  } catch(e){
    console.log(e)
    uploadStatus = false
  } finally{
    res.status(200).json({
        status:uploadStatus,
        message: message
    });
  }
});

let controller = () => {
      console.log(req.body, req.files);
      res.send('ok');
  };

  router.use(fileUpload({
    useTempFiles: true,
    tempFileDir: 'tmp'
  }));


  //  router.post("/", (req, res) => {
  //   res.send("my post method inside uploadPictures");
  //  }); 
 
  // router.get('/', function(req, res, next)  {
  //   res.send("API is working properly");
  // });

module.exports = router;