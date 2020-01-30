console.assert(JSON.stringify('false') === "\"false\"");

let obj = {
    a: undefined,
    b: function () {}
};

console.assert(JSON.stringify(obj) === '{}');
let arr = [undefined, function () {}];
console.assert(JSON.stringify(arr) === "[null,null]");
console.assert(JSON.stringify(/foo/) === '{}');
obj = {};
Object.defineProperties(obj, {
    'foo': {
        value: 1,
        enumerable: true
    },
    'bar': {
        value: 2,
        enumerable: false
    }
});
console.assert(JSON.stringify(obj) === "{\"foo\":1}");

obj = {
    'prop1': 'value1',
    'prop2': 'value2',
    'prop3': 'value3'
};
const selectedProperties = ['prop1', 'prop2'];
console.assert(JSON.stringify(obj, selectedProperties) === "{\"prop1\":\"value1\",\"prop2\":\"value2\"}");
console.assert(JSON.stringify(['a', 'b'], ['0']) === "[\"a\",\"b\"]");
console.assert(JSON.stringify({0: 'a', 1: 'b'}, ['0']) === "{\"0\":\"a\"}");

function double(key, value) {
    if (typeof value === "number") {
        value = 2 * value;
    }
    return value;
}

console.assert(JSON.stringify({ a: 1, b: 2 }, double) === '{"a":2,"b":4}', 'double the number value');
console.log(JSON.stringify({a: {b: 1}}));


function remove_string(key, value) {
    if (typeof(value) === "string") {
        return undefined;
    }
    return value;
}
console.assert(JSON.stringify({ a: "abc", b: 123 }, remove_string) === '{"b":123}');
console.log(JSON.stringify({ p1: 1, p2: 2 }, null, 2));
console.log(JSON.stringify({ p1:1, p2:2 }, null, '|-'));


let user = {
    firstName: '三',
    lastName: '张',

    get fullName(){
        return this.lastName + this.firstName;
    }
};
console.assert(JSON.stringify(user) === '{"firstName":"三","lastName":"张","fullName":"张三"}');

user = {
    firstName: '三',
    lastName: '张',

    get fullName(){
        return this.lastName + this.firstName;
    },

    toJSON: function () {
        return {
            name: this.lastName + this.firstName
        };
    }
};

console.assert(JSON.stringify(user) ===  '{"name":"张三"}');

const c_date = new Date('2015-01-01');
console.assert(c_date.toJSON() === JSON.stringify(c_date));