//rule of thumb:
//== Loose equality 
//=== Strict equality

// 1 ----------Empty string vs 0 vs"0(transitivity broken)----------
console.log("" ==0);//true - "" coerced to number 0
console.log("0" == 0); //true - "0" coerced to number 0
console.log("" == "0");//false - "" is not equal to "0" - both strings are not equal


//fixes it
console.log(""===0); //false - strict check we will check for the both value and data type
console.log("0"===0);//false - strict check we will check for the both value and data type  
console.log(""==="0");//false - strict check we will check for the both value and data type



