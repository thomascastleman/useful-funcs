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
