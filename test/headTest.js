const assertEqual = require('../assertEqual')
const head = require('../head')

assertEqual(head([5, 8, 9]), 5);
assertEqual(head(['Z', 'a', 'c', 'h']), 'Z');