
console.assert(!(Symbol("key") === Symbol("key")));

const sym = Symbol();

let obj = {
    [sym]: "value"
};

console.assert(obj[sym] === 'value');


const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
        return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol]();

console.assert(className === 'C');
console.assert();