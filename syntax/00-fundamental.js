var x = 1;
//如果使用var重新声明一个已经存在的变量，是无效的。
var x;
console.assert(x === 1);
// 但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。
var x = 3;
console.assert(x === 3);
