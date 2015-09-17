var express = require('express');
var router = express.Router();
// var Poems = require('../models/Magnetize');


router.get('/', function(req, res) {
  res.render('templates/new');
});

router.post('/add', function (req, res) {

  console.log(req.body);
  var collection = global.db.collection('poems');

  collection.save(req.body, function() {
    console.log('saved');
    res.redirect('/magnetize');
  });

});

module.exports = router;
