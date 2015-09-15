'use strict';

var expect = require('chai').expect;
var should = require('chai').should;

var request = require('supertest');
var Magnet = require('../server/models/Magnetize');
var app = require('../app');

describe('GET /', function () {
  it('should respond with instructions', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end( function (err, res) {
        if (err) throw err;
        res.body.should.contain('Instructions');
        done();
      });
  });
});

describe('GET /new', function () {
  it('should respond with form', function (done) {
    request(app)
      .get('/new')
      .type('form')
      .expect(200)
      .end( function (err, res) {
        if (err) throw err;
        done();
      });
  });
});

describe('GET /magnetize', function () {
  it('should respond')
});

describe('POST /magnetize', function () {
  it('should create a poem', function () {

  });

  it('should display the magnetized poem', function () {
    request(app)
      .get('magnetize/:id')
      .expect(200)
      .end( function (err, res) {
        if (err) throw err;
        done();
      });
  });
});
