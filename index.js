//////////////////////// TABLES ////////////////////////

function tables() {
 var table = parseInt(prompt("Enter a number to Show its multiplication table"));
var end = parseInt(prompt("Enter Ending number for multiplication table"));
var start = parseInt(prompt("Enter starting number for multiplication table"));
 

document.writeln("Table of "+table + "<br><br>");
if (start<end) {
    for (var i = start; i <= end; i++) {
   document.writeln(table+ " x "+ i +" = " + table*i + "<br>");
    
}
} else {
     alert("Starting number should be smaller than Ending number")
}
}
//////////////////////// EVEN & ODD ////////////////////////


function evenNodd() {
    var num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert(num + " is an even number");
} else {
    alert(num + " is an odd number");
}
}

//////////////////////// PRIME ////////////////////////


function prime() {
     var num = parseInt(prompt("Enter a number:"));
     var isPrime = true
     if (num <= 1) {
       isPrime = false; 
     } else {
        for (let i = 2; i <num; i++) {
if (num % i === 0) {
             isPrime = false;
             break
}            
        }
     }

     if (isPrime) {
    alert(num +" is a Prime Number");
} else {
     alert(num +" is not a Prime Number");
}
}




//////////////////////// FORWARD ////////////////////////




//////////////////////// BACKWARD ////////////////////////


//////////////////////// FACTORIAL ////////////////////////

function factorial() {
    
 var num = parseInt(prompt("Enter a number:"));
var factorail = 1

    if (num<0) {
   alert("Number Shiuld be Greater than 0 ")
} else {
   for (let i = 1; i <= num; i++) {
    factorail*=i
    
   }
   alert("Factorial of "+num + " is "+factorail);
}

   
  }






//////////////////////// square root ////////////////////////








