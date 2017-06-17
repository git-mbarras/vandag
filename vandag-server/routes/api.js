const router = require('express').Router();

//var mongoose = require('mongoose');


//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1/test_db';
//mongoose.connect(mongoDB);

//Get the default connection
//var db = mongoose.connection;


MongoClient = require('mongodb').MongoClient;

var db = MongoClient.connect('mongodb://mongo:27017/test_db', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
  
});



//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/pubs', (req, res, next) => {

    MongoClient.connect('mongodb://mongo:27017/test_db', function(err, db) {
    if(err)
        throw err;

    var col = db.collection('pubs');
  // Show that duplicate records got dropped
    col.find({}).toArray(function(err, items) {
    return res.json(items);
    
  });
    
});
    
  
});





module.exports = router;