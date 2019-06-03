# useful-funcs
Some Javascript utility functions for tasks I find myself doing often.


## Usage

```javascript
rand(array)
```

Get a random element from an array.

----
```javascript
randSubset(array, number)
```

Get a random subset of an array. Returns `[]` when given an empty array, or when size of requested subset exceeds size of given array.

----

```javascript
choose(array, number)
```

Choose a specified number of elements randomly from a given array, *allowing duplicates.* Works with choosing more elements than are in the array.

----

```javascript
filter(array, quality)
```

Extract a subset of an array whose elements match a given quality. The `quality` argument should be a function operating on an element of that array returning a boolean indicating whether or not it should be included in the filtered subset.

----

```javascript
unique(array)
```

Returns a version of the given array, without any duplicate entries.