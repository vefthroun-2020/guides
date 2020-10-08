// console.log("this works!")

//functions:
var myFunction = function(){
    console.log("inside myFunction");
    console.log("soemthing");
}

var myObj = {
    age: 12,
    sayHello: function(){

    }
}

// var results = myFunction();
// myFunction();
// myFunction();

var addTwoNumbers = function(firstNumber, secondNumber){
    var result = firstNumber+secondNumber;
    return result;
}

var r = addTwoNumbers(5,7);
//console.log(r)

r = addTwoNumbers(4,4);
//console.log(r)

// write in the chat a function that takes two parameters:
// lastName and firstName and returns "your name is: ..."

var myName = function(firstName, secondName) {
     var myName = `my name is ${firstName + '' + secondName}` 
     return myName; 
    } 
var myname1 = myName("Daniel", "Bergmann");
 //console.log(myname1); 




 var myFunctionFunction = function(f){
     if(typeof f === "function"){
         console.log("this was a function")
     }
     else{
         console.log("you need to pass in a function");
     }
     f();
 }

 myFunctionFunction(function(){
     console.log("calling..." )
 })
 myFunctionFunction(8);