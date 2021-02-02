// MDN 
// https://developer.mozilla.org/

// JavaScript > JavaScript reference > Standard built-in objects > String:

// String Length                  -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
var strLength = "The length property of a String object contains the length of the string";
console.log(strLength.length); // expected output: 72
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype[@@iterator]() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
const str = 'ABC';
const strIter = str[Symbol.iterator]();
console.log(strIter.next().value); // expected output: A
console.log(strIter.next().value); // expected output: B
console.log(strIter.next().value); // expected output: C
const str2 = 'DEF';
const strIter2 = str2[Symbol.iterator]();
console.log(strIter2.next().value, strIter2.next().value, strIter2.next().value); // expected output: D E F
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.charAt() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
const strCharAt = 'Returns a new string';
// index:        0123456789
console.log(strCharAt.charAt(4)); // expected output: "r"
console.log(strCharAt.charAt(9)); // expected output: " "
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.charCodeAt() --------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
const strCharCodeAt = 'Returns an integer between 0 and 65535';
// index:            0123456789
const index = 0;
console.log(`The character code ${strCharCodeAt.charCodeAt(index)} is equal to ${strCharCodeAt.charAt(index)}`); 
// expected output: "The character code 82 is equal to R"
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.codePointAt() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
const icons = '☃★♲';
console.log(icons.codePointAt(1)); // expected output: "9733"
// 9733 Decimal = 2605 Hex => "BLACK STAR"
// https://www.unicode.org/charts/PDF/U2600.pdf
// https://www.unicode.org/charts/#symbols
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.concat() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
const strConcat1 = "Hello";
const strConcat2 = "World";
console.log(strConcat1.concat(' ', strConcat2));  // expected output: "Hello World"
console.log(strConcat2.concat(', ', strConcat1)); // expected output: "World, Hello"
console.log(strConcat1 + " " + strConcat2);       // expected output: "Hello World"
console.log(strConcat1 + ", " + strConcat2);      // expected output: "Hello, World"
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.endsWith() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
const strEndsWith = "Cats are the best!";
//                   0123456789        
console.log(strEndsWith.endsWith("!"))                            // expected output: "true"
console.log(strEndsWith.endsWith("!", 18))                        // expected output: "true"
console.log(strEndsWith.endsWith("best"))                         // expected output: "false"
console.log(strEndsWith.endsWith("!", 17))                        // expected output: "false"
console.log(strEndsWith.endsWith("best", 17))                     // expected output: "true"
console.log(strEndsWith.endsWith("best", strEndsWith.length - 1)) // expected output: "true"
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.fromCharCode() ----------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// Share on PinboardShare on HackerNewsShare on TwitterShare on FacebookShare on Reddit
// https://www.fileformat.info/info/charset/UTF-16/list.htm
console.log(String.fromCharCode(33));               // expected output: "!"
// UTF-16 (decimal) >  33 > https://www.fileformat.info/info/unicode/char/0021/index.htm
console.log(String.fromCharCode(189, 43, 190, 61)); // expected output: "½+¾="
// UTF-16 (decimal) > 189 > https://www.fileformat.info/info/unicode/char/00bd/index.htm
// UTF-16 (decimal) >  43 > https://www.fileformat.info/info/unicode/char/002b/index.htm
// UTF-16 (decimal) > 190 > https://www.fileformat.info/info/unicode/char/00be/index.htm
// UTF-16 (decimal) >  61 > https://www.fileformat.info/info/unicode/char/003d/index.htm
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.fromCodePoint() ---------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
console.log(String.fromCodePoint(9731, 32, 9733, 32, 9842, 32, 0x4F60)); // expected output: "☃★♲你"
// UTF-16 (decimal) > 32      > "SPACE" > https://www.fileformat.info/info/unicode/char/0020/index.htm
// UTF-16 (decimal) > 9731    > ☃       > https://www.fileformat.info/info/unicode/char/2603/index.htm
// UTF-16 (decimal) > 9733    > ★       > https://www.fileformat.info/info/unicode/char/2605/index.htm
// UTF-16 (decimal) > 9842    > ♲       > https://www.fileformat.info/info/unicode/char/2672/index.htm
// UTF-16 (hex)     > 0x2F804 > 你       > https://www.fileformat.info/info/unicode/char/4f60/index.htm
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.includes() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const sentence = "Return true or false";
console.log(sentence.includes("Return")); // expected output: "true";
console.log(sentence.includes("Test"));   // expected output: "false";
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

//  -------------------------------------------------------------------------- //
// 
// expected output: ""
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

//  -------------------------------------------------------------------------- //
// 
// expected output: ""
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

//  -------------------------------------------------------------------------- //
// 
// expected output: ""
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);