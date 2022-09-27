// const sum = require('..sum.js');

import sum from '../sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(8, 2)).toBe(10);
  expect(sum(3, 2)).toBe(5);
  expect(sum(81, 2)).toBe(83);
  expect(sum(4, 2)).toBe(6);
});