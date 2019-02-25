// Lust a quick LS problem today. Here are the instructions:
// Create a function that takes an array of strings and return an array,
// sorted from shortest to longest.

function sortByLength(arr) {
		for (let L = 0; L < arr.length-1; L++){        // One and only for loop.
			if (arr[L].length > arr[L+1].length)       // if param index is greater than other.
				{
					var x = arr[L+1];                   // short & sweet sort alg.
					arr[L+1] = arr[L];
					arr[L] = x;
				}
            }
	return arr;                                 // RESULT RETURNED.
};

// Product returned resulting in shortest -> greatest strings returned in array.


// Take 2 
function sortByLength(arr) {
	arr.sort(function(a,b){                   // utitlizing the compareFunction sorting a&b
		return a.length - b.length;           // comparing array lengths of a&b and sorting from shortest to longest
	return arr;								  // RESULT RETURNED.
	})
};

// Product returned resulting in shortest -> greatest strings returned in array.


//Take 3
function sortByLength(arr) {
	let newOrder = arr.sort(function(a,b) {     //This is pretty similar to "Take 2"
		return a.length - b.length;				//Just reworded slightly and set a variable for the sort function.
	 })											
	return newOrder;								// RESULT RETURNED.
};
// Product returned resulting in shortest -> greatest strings returned in array.