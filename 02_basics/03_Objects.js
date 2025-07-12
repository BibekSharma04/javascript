// an object is a collection of key-value pairs (also called properties) where keys are strings (or Symbols) and values can be of any data type—such as numbers, strings, functions, arrays, or even other objects.


//Object literals
const mysymbol=Symbol("key1");

const Student = {
    [mysymbol]: "key1",                                     //typeof mysymbol is symbol
    fullname:"Bibek Sharma",
    age: 19,
    address:"Baglung",
    isPass: true,
};
console.log(Student["fullname"]);
console.log (Student[mysymbol]);                 


Student.fullname = "Bibek Sapkota";
Object.freeze(Student);          //The Object.freeze() method in JavaScript is used to freeze an object, meaning: You can read its properties however You cannot add, modify, or delete any properties or You cannot change existing values.
//syntax : Object.freeze(obj)
Student.fullname = "Bibek Chhetri";
console.log(Student["fullname"]);
console.log(Student);


//Object.freeze() only works shallowly.  That means if the object contains nested objects, those are not frozen.
const user = {
  name: "Sita",
  address: {
    city: "Kathmandu"
  }
};
Object.freeze(user);
user.address.city = "Pokhara";  // Still works!
console.log(user.address.city); // "Pokhara"
