
console.assert(typeof 123 === "number");
console.assert(typeof '123' === "string");
console.assert(typeof true === "boolean");
function f() {}
console.assert(typeof f === "function");
console.assert(typeof undefined === "undefined", 'undefined');
console.assert(typeof x === "undefined", 'x is undefined');
console.debug(typeof window);
console.assert(typeof window === "undefined", 'window is undefined in node');
console.assert(typeof {} === "object");
console.assert(typeof [] === "object", 'array is object');
console.assert(typeof null === "object", '');
console.debug(typeof null);