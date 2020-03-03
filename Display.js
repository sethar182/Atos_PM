//FOR EXPRESS

//Express: Configuration Details
var express = require('express');
var path = require("path");
var app = express();
var mongoose = require('mongoose'); 
var morgan = require('morgan'); 
var argv = require('optimist').argv;

//Express: setting static path
app.use(express.static(path.join(__dirname, 'views')));
//Express: Changing the view enging
app.set('view engine', 'ejs');
app.use(morgan('dev')); 
//FOR MONGO


mongoose.connect('mongodb://' + argv.be_ip + ':80/AtosDB');

// define model =================
	var Project = mongoose.model('Atos_P', {}, 'Atos_P');

var myArray = [];

Project.
  find({}, function (err, p) {
    if (err) return handleError(err);
    for (var i = 0; i < p.length; i++){
            //Stores every data point into myArray
            myArray.push(p[i]);
            console.log(myArray[i]);
        }

	app.get('/', function (req, res) {
            //Passes data values from Mongo over to EJS file to be rendered
            //res.render('Index', {myArray: myArray});
        });
	
	
	app.listen(8080);
console.log("App listening on port 8080");
	
  });


