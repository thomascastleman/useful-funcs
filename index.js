
/* Get a single random element from an array */
exports.rand = function(arr) {
	if (arr.length > 0) {
		// return a single random element
		return arr[Math.floor(Math.random() * arr.length)];
	} else {
		return null;
	}
}

/*	Get a specified number of random elements from a given array, without repeats.
	Returns an empty array if given array is empty, or if more elements are requested than
	exist in the given array. */
exports.randSubset = function(arr, num) {
	// if non-empty array and subset strictly smaller
	if (arr.length > 0 && num < arr.length) {
		// get all possible indices in this array
		var indices = Array.apply(null, { length: arr.length }).map(Number.call, Number);
		var subset = [];

		for (var i = 0; i < num; i++) {
			// get random index of an index in arr
			var rand = Math.floor(Math.random() * indices.length);

			// add actual element of arr to subset
			subset.push(arr[indices[rand]]);

			// remove index of element from indices list
			indices.splice(rand, 1);
		}

		return subset;
	} else {
		// return empty subset
		return [];
	}
}

/*	Choose a specified number of elements randomly from a given array, 
	allowing duplicates and choosing more elements than are in the array.
	Returns [] when given empty array */
exports.choose = function(arr, num) {
	var set = [];

	if (arr.length > 0) {
		for (var i = 0; i < num; i++) {
			set.push(arr[Math.floor(Math.random() * arr.length)]);
		}
	}

	return set;
}

/* Extract a subset of elements that match a given quality */
exports.filter = function(arr, qual) {
	var filtered = [];

	for (var i = 0; i < arr.length; i++) {
		if (qual(arr[i])) {
			filtered.push(arr[i]);
		}
	}

	return filtered;
}

/* Return version of an array without any duplicate entries */
exports.unique = function(arr) {
	var filtered = [];

	for (var i = 0; i < arr.length; i++) {
		// if element not already present in filtered array
		if (filtered.indexOf(arr[i]) == -1) {
			filtered.push(arr[i]);
		}
	}

	return filtered;
}