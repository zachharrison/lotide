const assertEqual = require('../assertEqual');
const tail = require('../tail');

const arr = ['Zach', 'Harrison'];
assertEqual(tail(arr).join(''), 'Harrison');
