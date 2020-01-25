
var obj = { p: 'a' };

let pd = Object.getOwnPropertyDescriptor(obj, 'p');
console.dir(pd);
console.assert(pd.writable && pd.enumerable && pd.configurable);
console.assert(Object.getOwnPropertyDescriptor('toString') === undefined);

var o2 = Object.defineProperties({}, {
    p1: { value: 1, enumerable: true },
    p2: { value: 2, enumerable: false }
});

let o2ps = Object.getOwnPropertyNames(o2);
console.debug(o2ps);
console.assert(o2ps[0] === 'p1' && o2ps[1] === 'p2');


console.assert(Object.keys([]).length === 0);
console.assert(Object.getOwnPropertyNames([]).length === 1);
console.assert(Object.keys(Object.prototype).length === 0);
let pp = Object.getOwnPropertyNames(Object.prototype);
console.dir(pp);
console.assert('hasOwnProperty' in pp);


let o3 = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});

console.assert(o3.p === 123);
o3.p = 456;
console.assert(o3.p === 123);


let o4 = Object.defineProperties({}, {
    p1: { value: 123, enumerable: true },
    p2: { value: 'abc', enumerable: true },
    p3: { get: function () { return this.p1 + this.p2 },
        enumerable:true,
        configurable:true
    }
});