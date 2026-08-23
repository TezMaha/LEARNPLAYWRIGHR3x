//Arrays Literal 

let browsers = ["chrome", "firefox", "safari"];
console.log(browsers);
//Arrays Constructor
let scores = new Array(3);
console.log(scores); //output - [ <3 empty items> ]
scores[0]="1";
console.log(scores); //output - [ '1', <2 empty items> ]

let scores2 = new Array(1,2,3);
console.log(scores2); //output - [ 1, 2, 3 ]

let numbers = new Array(100, 200, 300, 400);

//Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. It is useful when you want to create an array with a specific set of values.
let test = Array.of(10,20,30,40,50);
console.log(test); //output - [ 10, 20, 30, 40, 50 ]
console.log(test.length);

//Array.from

let chars = Array.from("Hello");
console.log(chars);

