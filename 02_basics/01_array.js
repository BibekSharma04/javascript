// array in js
let marks=[89,99,96,97,88];
console.log(marks);
marks[0]=88;
console.log("marks[0]=",marks[0]);

// accesing the last array
let fruits=["Banana","Apple","orange","mango"];
fruit=fruits[fruits.length-1];
console.log(fruit);

//Array methods in javascript

//1.push()
//To add one or more element to the end of an array and returns the new length of the array.
let fruits1=["Banana","Apple","orange","mango"];
fruits1.push("pineapple");
console.log(fruits1);
console.log(fruits1.length);

//2.pop()
//To remove the last element from an array and return that removed element
let fruits2=["Banana","Apple","orange","mango"];
let removedfruits = fruits2.pop();
console.log(fruits2);
console.log(removedfruits);

//3.unshift()
//To add one or more elements to the beginining of an array and returns the new length of the array
let fruits3=["Banana","Apple","orange","mango"];
fruits3.unshift("pineapple");
console.log(fruits3);
console.log(fruits3.length);

//4.shift()
//To remove the first elements form an array and return that removed elements
let fruits4=["Banana","Apple","orange","mango"];
let removedfruits4=fruits4.shift();
console.log(fruits4);
console.log(removedfruits4);

//5.concat()
//To merge two or more arrays without modifying the original arrays and returns a new array
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let result=arr1.concat(arr2);
console.log(result);
console.log(arr1);
console.log(arr2);

//6.slice()
//To extract a portion of an array wihout modifying the original array and return a new array with the selected elements.
let fruits6=["Apple","Mango","orange","Banana","Pineapple"];
console.log(fruits6);
newfruits=fruits6.slice(1,4); //start(optional)= the index where extraction begins and end(optional)= where extraction stop.
console.log(newfruits);

//7.splice()
//To Add,Remove or Replace element in array and modifies the original array and returns the removed elements.
//syntax: array,splice(start,deletecount,item1,item2....);
let fruits7=["Apple","Mango","orange","Banana","Pineapple"];
removedfruits=fruits7.splice(1,3,"goba","stawberry");
console.log(fruits7);
console.log(removedfruits);



