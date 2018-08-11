"use strict";
exports.__esModule = true;
function countPositivesSumNegatives(input) {
    var rv = [];
    rv.push(input.reduce(function (acc, curr) { return acc + (curr > -1 ? 1 : 0); }, 0));
    return input.reduce(function (acc, curr) { return acc + (curr < 0 ? curr : 0); }, 0);
}
exports.countPositivesSumNegatives = countPositivesSumNegatives;
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
