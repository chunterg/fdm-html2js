'use strict';

var grunt = require('grunt');



exports.html2str = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/after.js');
    var expected = grunt.file.read('test/expected/after.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
