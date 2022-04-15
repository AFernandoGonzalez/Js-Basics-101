// document.write('Hello World');
// alert('Hello World');
// console.log('Hello World);

// document.write('One');
// alert('Two');
// console.log('Three');

// document.write({name: 'Fer'});
// alert({name: 'Fer'});
// console.log({name: 'Fer'});


// ------------- Statements ----------------//
// I woke up early today.
// Statements - sets of instructions
// comments - shortcut Commands +/

// console.log('Hi');



// ----------------------------------------------------------------------//
// ------------------- String Datatypes --------------------------------//

// ------------- Variables ----------------//

// You can declare your variables with var, let , const

// var value = 'declaration not too prefered with : var';
// console.log(value);

// let name = 'declaration is preffered with : let';
// console.log(name);

// const lastName = 'declaration cannot be reassign with : const';
// console.log(lastName);



// let fName = 'hey';
// let address, zip, state;
// address = '35 St';
// zip = 123;
// state = 'NY'
// console.log(fName);
// console.log(address);
// console.log(zip);
// console.log(state);
// console.log(address, zip, state);


// ------------- Camelcase or Underscore ----------------//

// let fullName = 'Camelcase';
// console.log(fullName);

// let full_name = 'underscore';
// console.log(full_name);

// ------------- "  " or ' ' ----------------//
// const doubleQuote = "Fernando";
// const singleQuote = 'Fernando';
// console.log(doubleQuote);
// console.log(singleQuote);

// string concatination - combining string values ``

// const name = 'fer';
// const last = 'gon';
// let fullName = name + " " + last;
// console.log('Hey there ' + fullName);


// const web = 'google';
// const url = 'https://www.' + web + '.com';
// console.log(url);





// ----------------------------------------------------------------------//
// ------------------- Numbers Datatypes --------------------------------//


// const number = 11;
// const number2 = 3;

// let number3 = 40;
// number3 += 5;

// let pants = 2.466;
// pants = 'are great';

// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2;
// const modulus = number % number2;

// console.log(number);
// console.log(pants);
// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(modulus);
// console.log(number3);


// const slices = 10;
// const children = 4;
// // get the remaider of pizza slides
// const amount = slices % children;
// console.log(amount);


// const random = 3+5+6+2*2;
// const random2 = (3+5+6+2)*2;
// console.log(random);
// console.log(random2);




// ----------------------------------------------------------------------//
// ------------------- 7 Datatypes in JS and Operators -------------------//

// -----------Operators
// typeof(variable or value) the result will return  a primitive data type

//  --------- Objects
// 1. Arrays
// 2. Functions
// 3. Objects


//  --------- Primitive
// 1. String
// const text = 'random text';
// console.log(typeof text);

// // 2. NUmber
// const num = 09484;
// console.log(typeof num);

// // 3. Boolean
// const value1 = true;
// console.log(typeof value1);

// // 4. Null
// const result = null;
// console.log(typeof result);

// // 5. Undefined
// let names;
// console.log(typeof names);

// // 6. Symbol(ES6)


// // ----------- ------ Arrays

// const friend1 = ['aroon','bob', 'sushi', 234, undefined, null];
// let bestFriend = friend1[1];
// console.log(bestFriend);

// friend1[2] = 'fer is the new value';
// console.log(friend1[2]);

// console.log(friend1);
// console.log(friend1[3]);



// ----------------- Functions

// function greeting(){
//     // logic
//     console.log('He there ana');
//     console.log('He there aroon');
// }

// greeting();
// greeting();

// varibles
// const name = 'bob';
// const lastName = 'Gon';
// const age = 56;

// function greeting(a, b, c){
//     // logic
//     console.log('My name is ' + a );
//     console.log('My last Name is ' + b);
//     console.log('And age is ' + c);
// }

// greeting(name, lastName, age);
// // greeting(name);
// // greeting(lastName);
// // greeting(age);



// variables

// //Example 1
// const wallHeight = 80;

// function calc(a){
//     // const newValue = a*2.54;
//     // console.log('The value in cm is : ' + a*2.56);
//     return a*2.54
// }
// const width = calc(100);
// const height = calc(wallHeight);

// const dimentions = [width, height];
// console.log(dimentions);


// // Example 2

// const n1 = calc(1,2);
// const n2 = calc(3,4);


// const values = [n1, n2, n3];
// console.log("Values in an array: " + values);

// function calc(num1, num2) {
//     result = num1 + num2;
//     console.log("single values: " + result);
//     return result;
// }

// // Function exprecsion
// const add = function(num1, num2) {
//     return num1 + num2;
// }

// const n3 = add(1,1);





// ----------------- Methods and objects
// // creating a person object
// const person = {
//     name : 'Fernando',
//     lastName: 'Gonzalez',
//     age: 27,
//     education: false,
//     status: true,
//     siblings: ['anna', 'sussan', 'peter'],
//     // once you invoke this function it becomes a method
//     // es6 function in a method
//     greet(){
//         console.log('This is a method');
//     }
// }

// console.log(person.age);
// console.log(person.siblings[2]);
// person.greet()


// ----------------- Conditional Statements

// const value = true;
// const value = 5;
// const value2 = false;

// if(value > 4){
//     console.log('Hi');
// }
// if(value2){
//     console.log('Hi..');
// }
// else{
//     console.log('value2 is false');
// }



// ----------------- Switch
// const dice = 1;


// switch(dice){
//     case 1:
//         console.log('You got one');
//         break;
//     case 2:
//         console.log('You got two');
//         break;
//     case 3:
//         console.log('You got three');
//         break;
//     default:
//         console.log('You didnt roll the dice');
// }




// ELSE IF
// if(dice === 1){
//     console.log('You got one');
// }
// else if(dice === 2) {
//     console.log('You got 2');
// }
// else{
//     console.log('You did not roll the dice');
// }


// ALL IF
// if(dice === 1){
//     console.log('You got one');
// }
// if(dice === 2) {
//     console.log('You got 2');
// }
// if(dice < 1 || dice > 6) {
//     console.log('You did not roll the dice');
// }


// ----------------------------------------------------------------------//
// -------------------While Loops -------------------//

// let amount = 10;

// while(amount > 0) {
//     console.log('I have ' + amount + ' dollars');
//     amount--
// }

// let amount = 12;

// do{
//     console.log('I have ' + amount + ' dollars.');
//     amount++
// } while(amount < 10);


// let i;

// for(i = 0; i < 5 ; i++){
//     console.log(i);
// }





// ----------------------------------------------------------------------//
// ------------------- String Properties and Methods -------------------//
