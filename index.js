
/* Get a single random element from an array */
const rand = (arr) => {
	if (arr.length > 0)
		// return a single random element
		return arr[Math.floor(Math.random() * arr.length)];

	return null;
}

/*	Get a specified number of random elements from a given array, without repeats.
	Returns an empty array if given array is empty, or if more elements are requested than
	exist in the given array. */
const randSubset = (arr, num) => {
	// if non-empty array and subset strictly smaller
	if (arr.length > 0 && num < arr.length) {
		// get all possible indices in this array
		let indices = Array.apply(null, { length: arr.length }).map(Number.call, Number);
		let subset = [];

		for (let i = 0; i < num; i++) {
			// get random index of an index in arr
			var rand = Math.floor(Math.random() * indices.length);

			// add actual element of arr to subset
			subset.push(arr[indices[rand]]);

			// remove index of element from indices list
			indices.splice(rand, 1);
		}

		return subset;
	}

	return [];
}

/*	Choose a specified number of elements randomly from a given array,
	allowing duplicates and choosing more elements than are in the array.
	Returns [] when given empty array */
const choose = (arr, num) => {
	let set = [];

	if (arr.length > 0) {
		for (let i = 0; i < num; i++) {
			set.push(arr[Math.floor(Math.random() * arr.length)]);
		}
	}

	return set;
}

/* Extract a subset of elements that match a given quality */
const filter = (arr, qual) => {
	let filtered = [];

	for (let index of arr) {
		if (qual(index))
			filtered.push(index);
	}

	return filtered;
}

/* Return version of an array without any duplicate entries */
const unique = (arr) => {
	let filtered = [];

	for (let current_index of arr) {
		if (filtered.indexOf(current_index) == -1)
			filtered.push(current_index);
	}

	return filtered;
}

/*	Given an array of objects, extract an array containing the values for a
	single shared property of those objects. */
const extract = (arr, prop) => {
	let ext = [];

	for (let index of arr) {
		ext.push(index[prop]);
	}

	return ext;
}

/*	Group an array of objects by the value of a given property.
	Returns map of each value of that property to an array of the objects
	that share that value */
const group = (arr, prop) => {
	let map = {};

	for (let index of arr) {
		// if no existing entry for this property
		if (!map[index[prop]])
			// add new array
			map[index[prop]] = [index];
		else
			// add to existing array
			map[index[prop]].push(index);
	}

	return map;
}


/* Export Functions */
module.exports = {
	rand,
	randSubset,
	choose,
	filter,
	unique,
	extract,
	group
}
