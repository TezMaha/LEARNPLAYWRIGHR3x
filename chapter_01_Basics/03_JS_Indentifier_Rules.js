// Identifier rules in JavaScript

// 1. Identifiers can start with a letter, underscore (_), or dollar sign ($)
var firstName = "John";
var _count = 5;
var $price = 100;

// 2. Identifiers can contain letters, digits, underscores, and dollar signs
var user2 = 20;
var ab123 = 34;

// 3. Identifiers are case-sensitive
var Name = "Alice";
var name = "Bob";

// 4. Identifiers cannot start with a digit
// var 2name = "Invalid";

// 5. Identifiers cannot contain spaces
// var my name = "Invalid";

// 6. Reserved words cannot be used as identifiers
// var class = "Invalid";

console.log("Valid identifiers:");
console.log(firstName);
console.log(_count);
console.log($price);
console.log(user2);
console.log(ab123);

console.log("Case sensitivity:");
console.log(Name);
console.log(name);
console.log(Name === name);


