// Creates a new array out of the two supplied by creating each possible pair from the arrays.
// Use Array.prototype.reduce(), Array.prototype.map() and Array.prototype.concat() to produce 
// every possible pair from the elements of the two arrays and save them in an array.

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

console.log(xProd([1, 2], ['a', 'b']));