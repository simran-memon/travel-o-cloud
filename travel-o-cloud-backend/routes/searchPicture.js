var express = require('express');
var router = express.Router();
var aws      =require('aws-sdk');

const ID = '';
const SECRET = '';
const DYNAMO_TABLE ='travel-o-cloud-ddb';

aws.config.update({region: "us-west-2",});
var dynamodb = new aws.DynamoDB({apiVersion: "2012-08-10",
                                accessKeyId: ID,
                                secretAccessKey: SECRET});


        router.post('/', function (req, res) {
            
            console.log(req.body)
            let {places,searchLabel,user} = req.body;
            places = places.toUpperCase()
            searchLabel = searchLabel.toUpperCase()
            user =user.toUpperCase()
            
            console.log(places)
            console.log(searchLabel)
            console.log(user)

            let uploadStatus = false, message="No pictures found", pictureURL = []
           
            try {
                     var params = {
                         TableName: DYNAMO_TABLE
                     };
    
                    dynamodb.scan(params).promise()
                    .then(function(result) {
                    //    console.log(JSON.stringify(result))
                            result.Items.forEach((item) => {
                            if (item.trip["S"].toUpperCase() === places && 
                            item.user["S"].toUpperCase() === user &&
                            (item.label0["S"].toUpperCase() === searchLabel
                            || item.label1["S"].toUpperCase() === searchLabel
                            || item.label2["S"].toUpperCase() === searchLabel
                            || item.label3["S"].toUpperCase() === searchLabel
                            || item.label4["S"].toUpperCase() === searchLabel)){
                                
                                //pictureURL.push('https://travel-o-cloud-1.s3.us-west-2.amazonaws.com/'+item.filename["S"])
                                pictureURL.push(item.filename["S"])
                                
                            }
                        });
                           
    
                        uploadStatus= true
                        message = "File details obtained"
                        res.status(200).json({
                             status:uploadStatus,
                             message: message,
                             response: pictureURL
                             });                    
                    })
                } catch(e){
                    console.log(e)
                    uploadStatus = false
                }
            })

module.exports = router;