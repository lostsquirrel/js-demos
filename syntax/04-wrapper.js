
var v1 = new Number(123);
console.assert(typeof  v1 === "object");
console.assert(v1 !== 123);

var v2 = new String('abc');
console.assert(typeof  v2 === "object");
console.assert(v2 !== 'abc');

var v3 = new Boolean(true);
console.assert(typeof  v3 === "object");
console.assert(v3 !== true);

console.assert(Number('123').valueOf() === 123);

console.assert(String(123).valueOf() === "123");

console.assert(Boolean(123).valueOf() === true);