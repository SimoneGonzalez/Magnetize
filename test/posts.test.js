'use strict';
var Magnet = require('../server/models/Magnetize');
var app = require('../app');

var mongoose = require('mongoose');

var newPoem = {
  title: "I, too",
  author: "Langston Hughes",
  poem: `I, too, sing America.
        I am the darker brother.
        They send me to eat in the kitchen
        When company comes,
        But I laugh,
        And eat well,
        And grow strong.

        Tomorrow,
        I'll be at the table
        When company comes.
        Nobody'll dare
        Say to me,
        'Eat in the kitchen,'
        Then.

        Besides,
        They'll see how beautiful I am
        And be ashamed--

        I, too, am America.`
}

newPoem.save(function (err) {
  if (err) throw err;
})
