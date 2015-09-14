var express = require('express');
var bodyParser = require('body-parser');

var app = express();

require('./lib/secrets');
require('./lib/mongodb');

app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./server/routes/index');
var startNew = require('./server/routes/new');
var magnet = require('./server/routes/magnetize');


app.use('/', routes);
app.use('/new', startNew);
app.use('/magnetize', magnet);

app.use(express.static('public'));

app.set('view engine', 'ejs');

//errors
app.use(function(req, res) {
  res.status(403).send('Unauthorized!');
});

app
  .use(function (req, res, next) {
    res.status(404).send('This page does not exist');
  })
  .use(function (err, req, res, next) {
    console.log('error', err);
    res.status(500);
    res.send('An error has occurred.');
  });

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

