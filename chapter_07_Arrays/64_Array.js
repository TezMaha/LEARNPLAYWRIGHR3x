let fruit =[];
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);
console.log(fruit.length);


// for the negative index use the at() method, which allows you to access elements from the end of the array using negative indices. For example, browsers.at(-1) will return the last element of the browsers array, which is "webkit".

console.log(browsers[-1]);//undefined
console.log(browsers.at(0));//chrome


    