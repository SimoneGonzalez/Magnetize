var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/:id', function(req, res) {

  var collection = global.db.collection('poems');

  collection.findOne({_id: ObjectID(req.params.id)}, function(err, poem) {
    console.log(poem);
    res.render('templates/magnetize', {
      title: poem.title,
      author: poem.author,
      poem: poem.poem
    });


  });

});


module.exports = router;
