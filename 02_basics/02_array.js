// concat() is a method used to combine (concatenate) strings or arrays.
//for array
const marvel_heroes=["Spiderman","Ironman","Thor"];
const dc_heroes=["Flash","Superman","Batman"];
const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);

//also
const marvel_heroes1=["Spiderman","Ironman","Thor"];
const dc_heroes1=["Flash","Superman","Batman"];
const allheroes1 = [...marvel_heroes1,...dc_heroes1];
console.log(allheroes1);

//The flat() method in JavaScript is used to flatten nested arrays — it creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.
//syntax:  array.flat(depth)
//depth (optional): An integer that specifies how deep a nested array structure should be flattened. Default is 1.
//Examples

//1.Flatten one level
let arr = [1, 2, [3, 4]];
let flatArr = arr.flat();
console.log(flatArr);  // Output: [1, 2, 3, 4]

//2.flatten two levels
let arr1 = [1,2,[3,4,[5,6]]];
let flatarr1 = arr1.flat(2);
console.log(flatarr1); // Output: [1,2,3,4,5,6]

//3.Flatten all levels (use Infinity)
let arr2= [1,2,[3,4,[5,6,[7,8,[9]]]]];
let flatarr2 = arr2.flat(Infinity);
console.log(flatarr2); // Output: [1,2,3,4,5,6,7,8,9]

//4.Removes Empty Slots Too
let arr4 = [1, , 3, [4, , 5]];
console.log(arr4.flat());  // Output: [1, 3, 4, 5]

//Note: Not Supported in IE(Internet Explore)
// The flat() method is not supported in Internet Explore


//isArray() method
// The Array.isArray() method checks whether a given value is an array.
//syntax: Array.isArray(value)
console.log(Array.isArray("Bibek"));
//Returns true if value is an array. and Returns false if not.
//Example

Array.isArray([1, 2, 3]);         // true
Array.isArray("hello");          // false
Array.isArray({name: "Bibek"});  // false
Array.isArray(new Array());      // true
Array.isArray([]);               // true
Array.isArray(null);             // false
Array.isArray(undefined);        // false

// Why Use Array.isArray() Instead of typeof?
// Because typeof treats arrays as objects:
typeof [1, 2, 3];     // "object"  not specific
Array.isArray([1, 2, 3]); // true  accurate


//if convert to array
console.log(Array.from("Bibek"));  
// Array.from()
//  creates a new array from: An array-like or iterable object (like strings, sets, maps, or NodeLists).

// Array.of()
//Array.of() is used to create a new array from a set of individual arguments, regardless of their number or type.
//syntax: Array.of(element1, element2, ..., elementN)

//Basic usage
let arr3 = Array.of(1, 2, 3);
console.log(arr3); // [1, 2, 3]

// Mixed types
let arr5 = Array.of(1, 'two', true, null);
console.log(arr5); // [1, "two", true, null]


//Also from the variable
let number1= 300;
let number2= 400;
let number3= 500;
console.log(Array.of(number1,number2,number3));

 