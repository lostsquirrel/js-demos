
const Vehicle = function (p) {
    this.price = p;
};
console.assert(new Vehicle(500).price === 500);

let v = Vehicle(500);

console.assert(v === undefined);
console.assert(price === 500);

const ReturnNotWork = function () {
    this.price = 1000;
    return 1000;
};
console.log((new ReturnNotWork()));
console.assert((new ReturnNotWork())  !== 1000);

const ReturnAnotherObject = function (){
    this.price = 1000;
    return { price: 2000 };
};

console.assert(new ReturnAnotherObject().price === 2000);

const NotConstructor = function() {
    return 'this is a message';
};

console.assert(JSON.stringify(new NotConstructor()) === "{}");

const NewTarget = function() {
     console.log(new.target === NewTarget)
};
NewTarget();
new NewTarget();

const person1 = {
    name: '张三',
    age: 38,
    greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
    }
};

const person2 = Object.create(person1);

console.assert(person2.name === '张三');
person2.greeting();