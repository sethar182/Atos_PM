
var mongoose = require('mongoose'); 
var morgan = require('morgan'); 
var argv = require('optimist').argv;


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

	

	
  });

