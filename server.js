var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var url = require('url');
var app = express();
var multer = require('multer');
var db = require("./db");
var assert = require("assert");

app.use(cors());
// parses request body and populates request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Where to serve static content
app.use(express.static('.'));

var params;

function parseParams(reqUrl) {
	return url.parse(reqUrl, true).query;
}

app.get('/', function (req, res) {
	res.sendfile('index.html');
});

app.post('/validateUser', function (req, res) {
	var collection = db.getDb().collection("users");
	collection.findOne({user:req.body.user, pwd:req.body.pwd}, function(err, result){
		if(err) throw err;
		else{
			res.sendfile("Job-Portal.html");
		}
	})
});

app.post('/submitResume', function (req, res) {
	db.getDb().collection('resume').update({ email: req.body.email }, req.body, { upsert: true }, function (err, result) {
        assert.equal(null, err);
        res.sendfile("Job-Portal.html");
    });

});

app.get('/getAllResumes', function (req, res) {
	db.getDb().collection('resume').find({}).toArray(function (err, result) {
		if(err){
			throw err;
		} else{
			res.send(result);
		}
        
    });

});

app.post('/uploadResume', function (req, res) {
	console.log("uploading file");
	upload(req,res,function(err) {  
        if(err) {  
			console.log(err);
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });  
});

var Storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "./uploads/");
	},
	filename: function(req, file, callback) {
		callback(null, file.originalname);
	}
});

var upload = multer({
	storage: Storage
}).single("file");


console.log("Job Portal App listening on port 3000");
app.listen(8080, function () { });
