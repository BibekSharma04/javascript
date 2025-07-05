console.log(null>0);
console.log(nul==0);
console.log(null>=0);

//The reason is that an equality check == and comparisons >< >= <=works differently.Comparisons convert null to a number,treating it as 0.That's why (3) null >=0 is true and (1) null>0 is false. 


//strict equality (===) is an operator used to compare both the value and the data type of two expressions.
//Returns true only if both the value and the type are exactly the same.
console.log(5===5);//true (both are number and equal)
console.log('5'===5); //false (string vs number)
console.log(true===1); //false(Boolean vs number)
console.log(null===null);//true
console.log(undefined===undefined);//true


//note: 
//Always use === instead of == to avoid unexpected results due to type coercion.


//Type coercion refers to the automatic or implicit conversion of values from one data type to another (such as from a string to a number, or vice versa).

//eg:
console.log('5'+1);//"51" = number 1 is converted to string
console.log('5'-1);//4 = string '5' is conveted to number
console.log(true+1);//2 = true become 1 
console.log(false+'1');// "false1" = false becomes string

//use typeof or instanceof to check type before operation
