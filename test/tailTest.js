const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

const arr = ['Zach', 'Harrison'];
assertEqual(tail(arr).join(''), 'Harrison');
