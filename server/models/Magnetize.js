var _ = require('lodash');
var ObjectID = require('mongodb').ObjectID;
var mongo = require('mongodb');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/magnetize');
// // MONGOOSE
// var poemSchema = new Schema({
//   title: String,
//   author: String,
//   poem: String
// })
// var Poems = mongoose.model =('Poems', poemSchema);

// MONGODB
Object.defineProperty(Poems, 'collection', {
  get: function () {
    return mongo.getDb().collection('poems');
  }
});

Poems.create = function (poem, cb) {
  Poems.collection.insertOne(poem, cb);
};



function setPrototype(pojo) {
  return _.create(Magnet.prototype, pojo);
}

module.exports = Poems;
