/* globals module */

/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function solve() {
    'use strict';
    return function sum(arr) {
        let result = 0;

        if (typeof arr === 'undefined') {
            throw ("Number cannot be undefined");
        } else {
            if (arr.length === 0) {
                return null;
            }
            arr.forEach(function(i) {
                i = +i;
                if (isNaN(i)) {
                    throw "Some of the elements is not convertible to number!";
                }
                result += i;
            });
        }
        return result;
    };
}

module.exports = solve;