
console.time('outer');
console.time('in');
setTimeout(function () {
    // console.log(2);
    console.timeEnd('in')
},1000);
console.timeEnd('outer');