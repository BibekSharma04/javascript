const score= 300;
console.log(score);

const balance = new Number(300);
 console.log(balance);
 console.log(balance.toString().length);
 console.log(balance.toFixed(2));//// Format to N decimal places (string output):

 
 // precision refers to how accurately numbers (especially floating-point numbers) are stored and represented in memory.
 let number = 12.35567
 console.log(number.toPrecision(3));
 let number1= 123.4566
 console.log(number1.toPrecision(2));
 let number2 = 23.44456
 console.log(number2.toPrecision(4));


 const money = 100000;
 console.log(money.toLocaleString('en-in'));  // powerful method that formats numbers, dates, or strings based on the user's locale (language and region), allowing you to customize:


 //math library+++
 console.log(Math.abs(-4));     //makes the negative value to postive however it cannot makes postive value to negative
 console.log(Math.round(3.5));     //round up the value
 console.log(Math.ceil(2.5));       //highest value
 console.log(Math.floor(2.5));      //lowest value
 console.log(Math.min(2,7,8,4,5,2,3,0));  //find minimum value
 console.log(Math.max(11,22,2,4,19,66,88,55,90)); //find maximum value


 //Math.random() is a built-in method that returns a pseudo-random floating-point number in the range:
 //0 (inclusive) to 1 (exclusive)
 //eg
 console.log(Math.random());
 //This gives you a decimal number between 0 and just less than 1 (e.g., 0.7341938392). You can multiply and adjust this number to fit the range you want.


 // Random number between 0 and 10:
 let num = Math.random() * 10;
 console.log(num); 

 // Random integer between min and max (inclusive):
 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //floor round up to lowest value
}
console.log(getRandomInt(5, 15)); 
//eg
let min = 10;
let max = 20;
console.log(Math.floor((Math.random()*(max-min+1))+min));



// Why +1?
// Because Math.random() never reaches 1, so without +1, your max value would never be included.

//Note:  //Math.random() is not cryptographically secure. It’s fine for games or simulations, but not for security (like generating passwords).
//If you need secure randomness, use:
window.crypto.getRandomValues();








