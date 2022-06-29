const { calculate } = require("./functions");

console.log(calculate(1, 2, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(5, 5, "*"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 10, 10));
console.log(calculate(10, "+", "+"));
