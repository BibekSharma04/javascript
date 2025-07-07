const fullname="Bibek Sharma";
const age=19;

console.log(`Hello MY name is ${fullname} and i am ${age} years old.`);

let fruit="Mango";
console.log(fruit.length);



let name="Bibek";
let newstring=name.replace("ib","IB");
console.log(newstring);

let city="kathmandu";
let newcity=city.replace("kathmandu","pokhara");
console.log(newcity);


let password1="Bibek123$sharma";
let newpassword1=password1.substring(0,9);
console.log(newpassword1);// output = Bibek123$

//if we put negative value then In substring method it start with 0 so we cannot take a negative value
let password2="Bibek123$sharma";
let newpassword2=password2.substring(-14,9);
console.log(newpassword2);// output = Bibek123$

//but in the case of the slice we can use negative value which simply reverse the value
let password="Bibek123@";
let newpassword=password.slice(-9,5);
console.log(newpassword); 



//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

//with string trim method
let fulname="     Bibek Sharma    ";
let newfulname=fulname.trim();
console.log(newfulname);

//without string trim method
let fulname1="     Bibek Sharma    ";
console.log(fulname1);

//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
//use trimStart()
let str = "   food  ";
console.log(str.length); // 9

str = str.trimStart();
console.log(str.length); // 6
console.log(str); // 'food  '


//use trimEnd()
let str1 = "   food  ";
console.log(str1.length); // 9

str2 = str1.trimEnd();
console.log(str1.length); // 7
console.log(str2); // '   food'


//includes()
let Fruit="banana";
let check=Fruit.includes("apple");
console.log(check); //output = false 
//if instead of apple if there is banana then output will true



//split() method is used to split a string into an array of substrings, based on a specified separator.
//syntax : string.split(separator, limit)
//eg :
//  Split by space:
let text = "I love coding";
let words = text.split(" ");
console.log(words); // ["I", "love", "coding"]

//Split by character:
let word = "hello";
let letters = word.split("");
console.log(letters); // ["h", "e", "l", "l", "o"]

//With limit:
let Str = "a-b-c-d-e";
let parts = Str.split("-", 3);
console.log(parts); // ["a", "b", "c"]

// Special Case: No separator
let stri = "hello";
let result = stri.split();
console.log(result); // ["hello"] — no split happens