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

function greeting(a, b){
    // logic
    console.log('He there ' + a );
    console.log('He there ' + b);
}

greeting('tom', 'arron');






