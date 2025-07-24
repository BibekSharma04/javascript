//function 
//It is a block of code that performs a specific task can be invoked whenever needed

//syntax:
function functionName(parameters) {
  // code to execute
  return value; // optional
}

function myname(){
   console.log("B");
   console.log("I");
   console.log("B");
   console.log("E");
   console.log("K");
}
myname();



function addNumber(number1,number2){
    return result=number1+number2;
}
console.log(addNumber(2,3));



function addNumber(number1,number2){
    let result=number1+number2;
    return result;
}
const result = addNumber(4,6);
console.log(result);


// Parameters vs Arguments
function sayHello(name) { // 'name' is a parameter
  console.log("Hello, " + name);
}
sayHello("Bibek"); // "Bibek" is an argument


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());


//function with object
const user={
   username:"Bibek",
   prices:1120
};
function handleObject(Anyuser){
    return `Username is ${Anyuser.username} and price is ${Anyuser.prices}`;  
}
console.log(handleObject(user));

//function with array
const NewArray=[200,400,600,800];
function returnSecondvalue(getarray){
    return getarray[1];
}
console.log(returnSecondvalue(NewArray));