//Lust a quick JS problem today. Here are the instructions:
//Create a function that takes an array of strings and return an array,
//sorted from shortest to longest.

function sortByLength(arr) {
		for (let L = 0; L < arr.length-1; L++){        //One and only for loop.
			if (arr[L].length > arr[L+1].length)       //if param index is greater than other.
				{
					var x = arr[L+1];                   //short & sweet sort alg.
					arr[L+1] = arr[L];
					arr[L] = x;
				}
            }
	return arr;                                 // result returned.
};

// Product returned resulting in shortest -> greatest strings returned in array.