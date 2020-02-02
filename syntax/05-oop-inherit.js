function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';

const cat1 = new Animal('大毛');
const cat2 = new Animal('二毛');


console.assert(cat1.color === 'white' && cat2.color === 'white');
cat1.color = 'black';
console.assert(cat1.color === 'black' && cat2.color === 'white' && Animal.prototype.color === 'white');
console.assert(Object.getPrototypeOf(Object.prototype) === null);

function F() {}
const f = new F();
console.assert(f.constructor === F);
console.assert(!(f.constructor === RegExp));

const y = new f.constructor();
console.assert(y instanceof F);

const obj = Object.create(null);

console.assert(typeof obj === "object");
console.assert(!(obj instanceof Object));

console.assert(!('hello' instanceof String));
console.assert(!(undefined instanceof Object));
console.assert(!(null instanceof Object));
console.assert();