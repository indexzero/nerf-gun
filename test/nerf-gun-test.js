
const tap = require('tap');
const toNerfDart = require('../');

function validNerfDart (uri, valid) {
  tap.test(uri, function (t) {
    t.plan(1);
    t.equal(toNerfDart(uri), valid);
    t.end();
  });
}

const validRoot = '//registry.npmjs.org/';
const validPath = '//your.private.registry/some-path/';
const validGar  = '//your.private.registry/project/repository/';

validNerfDart('http://registry.npmjs.org', validRoot);
validNerfDart('http://registry.npmjs.org/', validRoot);
validNerfDart('http://registry.npmjs.org?write=true', validRoot);
validNerfDart('http://registry.npmjs.org/#random-hash', validRoot);
validNerfDart('http://user:pass@registry.npmjs.org/?write=true', validRoot);

validNerfDart('http://your.private.registry/some-path', validPath);
validNerfDart('http://your.private.registry/some-path/', validPath);
validNerfDart('http://your.private.registry/some-path?write=true', validPath);
validNerfDart('http://your.private.registry/some-path#random-hash', validPath);
validNerfDart('http://user:pass@your.private.registry/some-path?write=true', validPath);

validNerfDart('http://your.private.registry/project/repository', validGar);
validNerfDart('http://your.private.registry/project/repository/', validGar);
validNerfDart('http://your.private.registry/project/repository?write=true', validGar);
validNerfDart('http://your.private.registry/project/repository#random-hash', validGar);
validNerfDart('http://user:pass@your.private.registry/project/repository?write=true', validGar);
