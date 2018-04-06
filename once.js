const assert = require('assert');

// Combinator function that allows operation to run once only
var once = function (fn) {
  var done = false;

  return function () {
    if (done) {
      return undefined;
    } else {
      done = true;
      return fn.apply(this, arguments);
    }
  }
}

var greet = function (name) {
  return `Well hello there, ${name}!`;
}

var greetOnce = once(greet);

// Tests
assert(greet('Jane') === 'Well hello there, Jane!', 'Should greet Jane');
assert(greet('Joe') !== 'Well hello there, Jane!', 'Should fail to greet Joe');
assert(once(greet)('Jon') === 'Well hello there, Jon!', 'Should greet Jon');
assert(greetOnce('Jon') === 'Well hello there, Jon!', 'Should greet Jon');
assert(greetOnce('Jon') === undefined, 'Should return undefined because greet has already been called');



// With ES6 syntax
let es6once = (fn) => {
  let done = false;

  return (...args) => {
    if (done) {
      return undefined;
    } else {
      done = true;
      return fn(...args);
    }
  }
}

let es6greet = (name) => `Well hello there, ${name}!`;

let es6greetOnce = es6once(es6greet);

// ES6 Tests
assert(es6greet('Jane') === 'Well hello there, Jane!', 'Should greet Jane');
assert(es6greet('Joe') !== 'Well hello there, Jane!', 'Should fail to greet Joe');
assert(es6once(es6greet)('Jon') === 'Well hello there, Jon!', 'Should greet Jon');
assert(es6greetOnce('Jon') === 'Well hello there, Jon!', 'Should greet Jon');
assert(es6greetOnce('Jon') === undefined, 'Should return undefined because greet has already been called');