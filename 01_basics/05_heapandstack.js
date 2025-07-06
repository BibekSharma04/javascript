//stack and heap are two different areas of memory used to store data.

//stack
let myname="Bibek sharma";
let anothername = myname;
 
anothername = "Babul sharma";
console.log(myname);
console.log(anothername);
//Data is stored in Last In, First Out (LIFO) order.Cleared automatically when function execution ends.

//Heap
let studentone = {
    fullname:"Bibek sharma",
    age:19,
    rollno:10
};
let studenttwo= studentone;
studentone.fullname="Ram sapkota";
console.log(studentone);
console.log(studenttwo);
//Used for storing complex and large data structures.
// Garbage collector automatically frees memory when no references to the object remain.

//example to show stack and heap
let a = 10;             // primitive: stack
let b = a;              // copies value (10)

let obj1 = { name: "Ram" };  // reference: heap
let obj2 = obj1;             // both point to same object

obj2.name = "Hari";

console.log(obj1.name);  // "Hari" – same object in heap
console.log(b);          // 10 – copy, unaffected by changes to `a`