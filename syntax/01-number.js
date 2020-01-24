
console.assert( 1 === 1.0);

console.assert(0.1 + 0.2 !== 0.3);
console.assert(Math.pow(2, 53) === Math.pow(2, 53) + 1 );
console.assert(Math.pow(2, 53) + 3 === Math.pow(2, 53) + 4);
console.assert(9007199254740992111 === 9007199254740992000);
console.assert(Math.pow(2, 1024) === Infinity);
console.assert(Math.pow(2, -1075) === 0);
console.assert(-0 === +0);
console.assert(0 === +0);
console.assert(NaN !== NaN);
console.assert(Infinity > -Infinity);