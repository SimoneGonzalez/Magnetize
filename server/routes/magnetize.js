var express = require('express');
var router = express.Router();
// var Poems = require('../models/Magnetize');


router.get('/', function(req, res) {

  var collection = global.db.collection('poems');

  collection.find().toArray(function (err, poems) {
    var formattedPoems = poems.map(function (poem) {
      return {
        _id:       poem._id,
        author:    poem.author,
        title:     poem.title,
        poem:      poem.poem
      };
    });

    res.render('templates/magnetize', {
      poems: formattedPoems
    });

  console.log(formattedPoems);
  });

});

module.exports = router;
