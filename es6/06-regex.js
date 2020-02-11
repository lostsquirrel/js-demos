console.assert(new RegExp(/abc/ig, 'i').flags === 'i');
console.assert(/foo.bar/.test('foo\nbar') === false);
console.assert(/foo.bar/s.test('foo\nbar') === true);
console.assert();