console.assert(/cat/.test("cats and dogs") === true);

var r = /x/g;
var s = '_x_x';

while (r.test(s)) {
    console.log(r.lastIndex)
}
console.log(r.lastIndex, s.length);
console.assert(r.lastIndex === 0);

r = /bb/g;
console.assert(r.test('bb') === true);
console.assert(r.test('-bb-') === false);