const array = require('./data')
const functions = require('./functions')

const data = require('./data2') //Ejercicio 2_1

// console.log(functions);
// console.log(data);


console.log("Result 1: ", functions.getFirstElement(array));
console.log("Result 2: ", functions.getAllButLast(array));
console.log("Result 3: ", functions.getLastElement(array));
console.log("Result 4: ", functions.deleteFirst(array));
console.log("Result 5: ", functions.getPosition([234, 564, 234,65], 1));
console.log("Result 6: ", functions.removeItem([2,5,6,8,9,6], 6));
console.log("Result 7: ", functions.deleteDouble([1,6,9,2,1,6,7,10]));
// console.log("Result 8: ", functions.getSum([1,6,9]))
console.log("Result 9: ", functions.getRandom(2, 8));

const _ = require('lodash');
console.log("Result 9B: ", _.random(5, 50, true).toFixed(2) * 1);
// (lower, upper, floatin (ob ich eine Nummer mit Komma haben möchte: treu oder nicht: false))
// console.log(_.random(5, 50));

console.log("Result 9C: ", functions.randomIntFromInterval(2, 25));


//Ejercicio 2_1:
console.log("Greater", functions.greaterThan(data));
console.log("smaller: ", functions.smallerThan(data));








