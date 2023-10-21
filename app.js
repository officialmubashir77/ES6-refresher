// 00:00 - Introduction
// 01:18 - Catching up on things
// 01:46 - Resources for refreshing React
// 02:47 - Resources for refreshing JavaScript
// 03:15 - Spread Operator
// 04:21 - Destructing
// 05:03 - Async js
// 05:13 - Promises and Callbacks
// 06:03 - Async Await
// 06:53 - Documenting 
// 08:59 - Final Note





// Spread Operator


let a = [ 1 , 2 ,  3 , 4] ; 

let b = [ "c" , ...a] ; 

console.log(b);




// Destructuring In JS

// let obj = {
//     c : 3 , 
//     d : 67 ,
// }

// let { c , d} = obj ;

// console.log(c);
// console.log(d);




// Asynch JS Behaviour

// console.log("Top Line Run ...");

// setTimeout(() => {
//     console.log("3 Sec Timout Console");
// } , 3000) ;

// console.log("Bottom Line Run ...");



// ******************************************************************************************
// Promises and Call backs in JS

// A promise in js is similar to a promise in real life .

// When we make a promise in real life, it is a guarantee that we are going 
// to do something in the future .

// Because promises can only be made for the future .

// A promise is an object . There are 3 states of the promise object 

// 1) Pending : Inititial State , before the promise suceeds or fails
// 2) Resolved : Completed Promise
// 3) Rejected : Failed Promise


// const myPromise = new Promise (( resolve , rejected ) => {
//     const a = 2 , b = 2  ;
//     const c = a + b ;

//     if (c === 4) {
//         resolve(`Yes ${a} + ${b} = 4`)
//     } else {
//         rejected(`No! ,,, ${a} + ${b} is !=4`)
//     }

// })

// let message ; 

// myPromise.then((m) => {
//     console.log(m);
// })
// .catch((err) => {
//     console.log(err);
// })


// ******************************************************************************************






// Map , Filter and Reduce

// // Map method in JS

// let arr =  [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ] ; 

// let getVal = arr.map((val)  => {
//     return val * 2 ; 
// })

// console.log(getVal);





// Reduce method in JS


// let redArr =  [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ] ; 

// let redGetVal = redArr.reduce((accum , cuurVal)  => {
//     return accum + cuurVal ;  
// })

// console.log(redGetVal);





// Filter method in JS


// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);
// // Output: [2, 4]





// Tripple Equality in JS .

// console.log(5 === 5);       // Output: true
// console.log(5 === '5');     // Output: false (different types)
// console.log(true === true); // Output: true
// console.log(null === undefined); // Output: false (different types)