//Question 1 
//Create an array of input numbers and name it as numbers.
let numbers = [-5, -2, -6, 0, -1];
console.log(numbers);

//Create a variable largest using the function Math.max() to find the largest
//number in the array
let largest = Math.max(...numbers);
console.log(largest);

//Use the function to output the result

function findLargest() {
    console.log("The largest of the five numbers is: " + largest);
}
//This function prints the result with the string explaining which number is the largest
findLargest(-5, -2, -6, 0, -1);
//This function prints the result
console.log(Math.max(-5, -2, -6, 0, -1));


//Question 2
//for this question, i evaluated using for loop statement
//Multiples of 3, print "Fizz" instead of the number
//Multiples of 5, print "Buzz" instead of the number
//Multiples of three and five, print"FizzBuzz"

//I have created a function by the name fizzBuzz

//our statements are "Fizz", for multiples of 3, "Buzz" for mutiples of 5 and "FizzBuzz"


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}

fizzBuzz();
//By calling the fizzBuzz() function we obtain the output.


//Question 3
let str="1";
str=+ !str;
//get the type using typeof
console.log(typeof str)

//output
console.log('The result of the following code is '+ typeof str);


//explanation
console.log('First, the variable str is declared and initialized with the string value of 1' +
'Next, the operator ! negates the boolean value of the string, since the string "1" is truthy,'+
'negating it will result in a falsy value of false.' +
'The + operator is then applied to the falsy value, which will convert it to the number 0.' +
'The value of str is then re-assigned to the result of this operation, which is the number 0.' +
'Finally, the console.log(typeof str) will output the type of the variable, which is now a number.');

  

  