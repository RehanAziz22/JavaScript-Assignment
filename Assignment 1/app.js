// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console

// let num1 = +prompt("Enter First Number")
// let num2 = +prompt("Enter Second Number")

// if(num1>num2){
//     console.log(num1 + " is larger")
//     document.write(num1 + " is larger")
// }else{
//     console.log(num2 + " is larger")
//     document.write(num2 + " is larger")
// }
// ================================================================================================================================

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// let sample = prompt("Enter any number negative or possitive")
// if (sample.includes("-")) {

//     alert(sample + "\nThe sign is -")
// }else{
//     alert(sample + "\nThe sign is +")
// }

// ================================================================================================================================

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let num1 = +prompt("Enter First Number")
// console.log(num1)
// let num2 = +prompt("Enter Second Number")
// console.log(num2)
// let num3 = +prompt("Enter Third Number")
// console.log(num3)
// let num4 = +prompt("Enter Fourth Number")
// console.log(num4)
// let num5 = +prompt("Enter Fifth Number")
// console.log(num5)

// let maxnum = Math.max(num1, num2, num3, num4, num5)
// console.log(maxnum + " is larger")

// ================================================================================================================================

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


// for(let i=0;i<=15;i++){
// if(i%2===0){
//     console.log(i+" is even")
// }else{
//     console.log(i+" is odd")
// }
// }

// ================================================================================================================================

// let sub1 = 50;
// let sub2 = 74;
// let sub3 = 69;
// let sub4 = 54;

// let average = (sub1 + sub2 + sub3 + sub4)/4;
// console.log("Average of all Subject " + average)
// if(average<60){
//     console.log("Grade F")
// }else if(average<70){
//     console.log("Grade D")
// }else if(average<80){
//     console.log("Grade C")
// }else if(average<90){
//     console.log("Grade B")
// }else if(average<100){
//     console.log("Grade A")
// }

// ================================================================================================================================

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for(let i=1;i<=100;i++){
//     if(i%3===0){
//         console.log("Fizz")
//     }else if(i%5===0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// ================================================================================================================================

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*")
        document.write("*")
    }
    console.log("\n")
    document.write("<br>")
}

// let userAge = prompt('Enter your age')
// if(parseInt(userAge) <= 10){
// console.log('Welcome')
// document.write('Welcome')
// }else if(parseInt(userAge) > 10){
// console.log('You are not allowed')
// document.write('You are not allowed')
// }else{
//     console.log('Please enter the valid input')
//     document.write('Please enter the valid input')
// }