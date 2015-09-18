var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('templates/new');
});

router.post('/add', function (req, res) {

  var collection = global.db.collection('poems');

  collection.insertOne(req.body, function(err, doc) {
    res.redirect('/magnetize/' + doc.insertedId);
  });

});


module.exports = router;
