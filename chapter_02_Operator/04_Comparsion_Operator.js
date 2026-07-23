//comparison operator (Will always return boolean value true or false)

//=, ==, ===, !=, !==, >, <, >=, <=
//= - assignment operator
//== - loss comparsion operator
//=== - strict comparsion operator
//!= - loss not equal operator
//=== - strict not equal operator
//> - greater than operator 
//< - less than operator
//>= - greater than or equal to operator
//<= - less than or equal to operator


console.log(3>4);
console.log(3<4);
console.log(3>=4);
console.log(3<=4);

console.log(5=="5");
console.log(5==="5");
//=== Strict check we will check for the both value and data type
//== Loss check we will check either the value or data type

console.log(3=="4");//false
console.log(3==="4");//false

//! - not operator

console.log(5!= 5);//false - lose -datatype or value
console.log(5!== 5);//false - strict -datatype or value

console.log(5 != "5");//false - lose -datatype or value
console.log(5 !== "5");//true - strict -datatype or value

console.log(5===5);

