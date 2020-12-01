# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zachharrison/lotide`;

**Require it:**

`const _ = require('@zachharrison/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertArraysEqual(arr1, arr2)`: Takes in two arrays as arguments, checks if they are equal and logs an appropriate message to the console
`assertObjectsEqual(obj1, obj2)`: Takes in two objects as arguments, checks if they are equal and logs an appropriate message to the console
`assertEqual(val1, val2)`: Uses strict comparison of two values
`countLetters(sentence)`: Take in a sentence as a string and returns a count of each of the letters in that string
`countOnly(allItems, itemsToCount)`: Takes in a collection of allItems and return counts for a specific subset of those itemsToCount
`eqArrays(arr1, arr2)`: Takes in two arrays as arguments and evaluates if they are a perfect match
`eqObjects(object1, object2)`: Takes in two objects as arguments and evaluates if they are a perfect match
`findKey(obj, callback)`: Takes in an object and a call back function and returns the first key that satisfies the callbacks condition. If no key matches the given value it will return undefined
`findKeyByValue(obj, val)`: Takes in an object and a specific value and returns the first key which matches that value. If no key matches the given value it will return undefined
`flatten(arr)`: Flattens a nested array elements into a single array
`head(arr)`: Returns the first element of an array
`letterPositions(sentence)`: Will return all the indices (zero-based positions) in the sentence string where each character is found
`map(arr, callback)`: Takes in an array and a callback function and returns a new array based on the conditions of the callback
`middle(arr)`: Returns the middle value of an array. If array is even, returns the two elements in the middle.
`tail(arr)`: Returns an array with the first element removed
`takeUntil(data, callback)`: The function will slice an array from the beginning until the condition of the given callback function is satisfied
`without(source, itemsToRemove)`: Removes unwanted items from an array