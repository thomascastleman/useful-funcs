# useful-funcs
Some Javascript utility functions for tasks I find myself doing often.

## Installation

To install, run `npm install useful-funcs --save`. Be sure to include the module, using:
```javascript
const uf = require('useful-funcs');
```

## Usage

#### rand()
```javascript
rand(array)
```

Get a random element from an array. Returns `null` if given array is empty.

E.g.
```javascript
var a = [1, 1, 2, 3, 5, 8];
var r = uf.rand(a);
// --> 2
```

----

#### randSubset()
```javascript
randSubset(array, number)
```

Get a random subset of an array. Returns `[]` when given an empty array, or when size of requested subset exceeds size of given array.

E.g.
```javascript
var a = [1, 1, 2, 3, 5, 8];
var sub = uf.randSubset(a, 3);
// --> [5, 1, 2]
```

----

#### choose()
```javascript
choose(array, number)
```

Choose a specified number of elements randomly from a given array, *allowing duplicates.* Works with choosing more elements than are in the array.

E.g.
```javascript
var a = [1, 1, 2, 3, 5, 8];
var ch = uf.choose(a, 4);
// --> [2, 3, 2, 8]

var ch = uf.choose(a, 8);
// --> [1, 3, 3, 5, 2, 1, 1, 5]
```

----

#### filter()
```javascript
filter(array, quality)
```

Extract a subset of an array whose elements match a given quality. The `quality` argument should be a function operating on an element of that array returning a boolean indicating whether or not it should be included in the filtered subset.

E.g.
```javascript
var a = [1, 2, 3, 4, 5, 6];
var f = uf.filter(a, (el) => el % 2 == 0);
// --> [2, 4, 6]
```

----

#### unique()
```javascript
unique(array)
```

Returns a version of the given array, without any duplicate entries.

E.g.
```javascript
var a = [1, 1, 2, 3, 5];
var u = uf.unique(a);
// --> [1, 2, 3, 5]
```

----

#### extract()
```javascript
extract(array, property)
```

Given an array of objects, returns an array of the values of a given property of those objects

E.g.
```javascript
var a = [
	{ uid: 1, name: "Bob" },
	{ uid: 5, name: "Tom" }, 
	{ uid: 2, name: "Steve" }
];

var e = uf.extract(a, 'uid');
// --> [1, 5, 2]
```

----

#### group()
```javascript
group(array, property)
```

Group an array of objects by the value of a given property. Returns a mapping of each value of that property to an array of the objects that share that value

```javascript
var a = [
	{ uid: 1, cost: 2 },
	{ uid: 2, cost: 3 },
	{ uid: 3, cost: 2 },
	{ uid: 4, cost: 7 },
	{ uid: 5, cost: 7 }
];

var m = uf.group(a, 'cost');
// -->
// {
//	'2': [ { uid: 1, cost: 2 }, { uid: 3, cost: 2 } ],
//	'3': [ { uid: 2, cost: 3 } ],
//	'7': [ { uid: 4, cost: 7 }, { uid: 5, cost: 7 } ]
// }
```