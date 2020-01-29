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
r = /(fred)+/;
console.assert(r.test('fredfred') === true);
console.assert(r.exec('fredfred').length === 2);
let m = 'abcabc'.match(/(.)b(.)/);
console.log(m);
console.assert(m[1] === 'a');
console.assert('abcabc'.match(/(.)b(.)/g)[1] === 'abc');
console.assert(/(.)b(.)\1b\2/.test("abcabc") === true);
console.assert(/(.)b(.)\2b\1/.test("abccba") === true);
console.assert(/y(..)(.)\2\1/.test('yabccab') === true);
console.assert(/y((..)\2)\1/.test('yabababab') === true);
console.assert('abc'.match(/(?:.)b(.)/)[1] === 'c');

const url_g = /(https|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
const url_ug = /(?:https|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
let url_google = 'https://google.com/';
console.assert(url_g.exec(url_google)[1] === 'https');
console.assert(url_ug.exec(url_google)[1] === 'google.com');
console.assert('abc'.match(/b(?=c)/)[0] === 'b');
console.assert(/\d+(?!\.)/.exec('3.14')[0] === '14');
console.assert('abd'.match(/b(?!c)/)[0] === 'b');
console.assert('abc'.match(/b(?!c)/) === null);