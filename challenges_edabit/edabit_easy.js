// How to run: *********** //
// npm install -g nodemon  //
// nodemon <file-name>     //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Easy:

console.log(`
Challenges 
JavaScript 
Easy
`);

// Sort Numbers in Descending Order
// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

function sortDescending(num) {
    if (num >= 0) {
        return parseInt(num.toString().split("").sort(function(a, b){return b - a}).join(""));
    } else {
        return 'Only positive numbers are allowed';
    }
}
console.log(sortDescending(123));        // expected output: 321
console.log(sortDescending(1254859723)); // expected output: 9875543221
console.log(sortDescending(73065));      // expected output: 76530
console.log(sortDescending(-1));         // expected output: Only positive numbers are allowed

console.log(`--------------------------------------------`);


// Reverse the Case
// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

function reverseCase(str) {
    let array = str.split("");
    let newString = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === element.toUpperCase()) {
            result = element.toLowerCase();
        } else {
            result = element.toUpperCase();
        }
        newString = newString + result;
    }
    return newString;
}
console.log(reverseCase("Happy Birthday")); // expected output: "hAPPY bIRTHDAY"
console.log(reverseCase("MANY THANKS"));    // expected output: "many thanks"
console.log(reverseCase("sPoNtAnEoUs"));    // expected output: "SpOnTaNeOuS"

console.log(`
or
`)

function reverseCaseYavor(str) {
	return [...str].map(c => c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).join("");
}
console.log(reverseCaseYavor("Happy Birthday")); // expected output: "hAPPY bIRTHDAY"
console.log(reverseCaseYavor("MANY THANKS"));    // expected output: "many thanks"
console.log(reverseCaseYavor("sPoNtAnEoUs"));    // expected output: "SpOnTaNeOuS"

console.log(`--------------------------------------------`);


// Hiding the Card Number
// https://edabit.com/challenge/rtpvAqFT3koqMoFCJ

function cardHide(card) {
    return card.slice(0, card.length - 4).replace(new RegExp("[0-9]", "g"), "*") + card.slice(-4);
}
console.log(cardHide("1234123456785678")); // expected output: "************5678"
console.log(cardHide("8754456321113213")); // expected output: "************3213"
console.log(cardHide("35123413355523"));   // expected output: "**********5523"

console.log(`
or
`)

function cardHide2(card) {
    return card.slice(0, card.length - 4).replace(/[0-9]/g, "*") + card.slice(-4);
}
console.log(cardHide2("1234123456785678")); // expected output: "************5678"
console.log(cardHide2("8754456321113213")); // expected output: "************3213"
console.log(cardHide2("35123413355523"));   // expected output: "**********5523"

console.log(`
or
`)

function cardHide3(card) {
    return card.slice(0, card.length - 4).replace(/[0-9]/g, "*").concat(card.slice(-4));
}
console.log(cardHide3("1234123456785678")); // expected output: "************5678"
console.log(cardHide3("8754456321113213")); // expected output: "************3213"
console.log(cardHide3("35123413355523"));   // expected output: "**********5523"

console.log(`
or
`)

function cardHideCodeSmell(card) {
    return card.replace(/.(?=.{4,}$)/g, '*');
}
console.log(cardHideCodeSmell("1234123456785678")); // expected output: "************5678"
console.log(cardHideCodeSmell("8754456321113213")); // expected output: "************3213"
console.log(cardHideCodeSmell("35123413355523"));   // expected output: "**********5523"

console.log(`
or
`)

const cardHideMbbentley = card => '*'.repeat(card.length - 4) + card.slice(-4);
console.log(cardHideMbbentley("1234123456785678")); // expected output: "************5678"
console.log(cardHideMbbentley("8754456321113213")); // expected output: "************3213"
console.log(cardHideMbbentley("35123413355523"));   // expected output: "**********5523"

console.log(`
or
`)

const cardHideAlessandroManicone = card => card.slice(-4).padStart(card.length, '*');
console.log(cardHideAlessandroManicone("1234123456785678")); // expected output: "************5678"
console.log(cardHideAlessandroManicone("8754456321113213")); // expected output: "************3213"
console.log(cardHideAlessandroManicone("35123413355523"));   // expected output: "**********5523"
console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);