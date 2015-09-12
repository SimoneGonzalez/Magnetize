var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.send('Hello World');
  res.render('templates/new');
});

module.exports = router;
