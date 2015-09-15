var _ = require('lodash');
var ObjectID = require('mongodb').ObjectID;
var mongo = require('mongodb');

// Object.defineProperty(Poem, 'collection', {
//   get: function () {
//     return mongo.getDb().collection('poems');
//   }
// });

// Poem.create = function (poem, cb) {
//   Poem.collection.insertOne(poem, cb);
// };

// function Magnet () {};

// module.exports = Magnet;

// function setPrototype(pojo) {
//   return _.create(Magnet.prototype, pojo);
// }