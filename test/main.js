'use strict';

var assert = require('assert');
var jquery = require('jquery');

suite('third party modules');

test('loads jquery from exposed jquery', function() {
  assert.equal(jquery().jquery, '1.10.2');
  // uncomment below to see failing test
  // assert.ok(0, 'fail');
});
