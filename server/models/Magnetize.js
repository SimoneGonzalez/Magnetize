var _ = require('lodash');
var ObjectID = require('mongodb').ObjectID;

function Magnet () {};

module.exports = Magnet;

function setPrototype(pojo) {
  return _.create(Magnet.prototype, pojo);
}