console.assert(/cat/.test("cats and dogs") === true);

let r = /x/g;
const s = '_x_x';

while (r.test(s)) {
    console.log(r.lastIndex)
}
console.log(r.lastIndex, s.length);
console.assert(r.lastIndex === 0);

r = /bb/g;
console.assert(r.test('bb') === true);
console.assert(r.test('-bb-') === false);

r = /[ab]/g;
r.lastIndex = 7;
console.assert('xaxb'.match(r).length === 2);
console.assert('_x_x'.search(/x/) === 1);

console.assert([]);

console.assert(/dog/.test('old dog') === true);

r = /c.t/;
const point_case = "cat,c2t,c-t".split(',');
for (i in point_case) {
    console.assert(r.test(point_case[i]) === true)
}

console.assert(/a-z/.test('b') === true, 'dash literal failed');
console.assert(/\bworld/.test('hello-world') === true);
console.assert(/\bworld/.test('helloworld') === false);

console.assert(/\Bworld/.test('hello-world') === false);
console.assert(/\Bworld/.test('helloworld') === true);

console.assert(/lo{2}k/.test('look') === true);

r = /lo{2,5}k/;
console.assert(r.test('lok') === false);
console.assert(r.test('look') === true);
console.assert(r.test('loooook') === true);


console.assert(/world$/.test('hello world\n') === false);
console.assert(/world$/m.test('hello world\n') === true);
console.assert();
console.assert();
console.assert();
console.assert();
console.assert();