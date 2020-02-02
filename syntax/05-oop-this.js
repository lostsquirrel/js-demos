function f() {
    return '姓名：'+ this.name;
}

const A = {
    name: '张三',
    describe: f
};

const B = {
    name: '李四',
    describe: f
};
console.assert(A.describe() === "姓名：张三");
console.assert(B.describe() === "姓名：李四");

const fx = function () {
    return this.x;
};

const x = 1;
const obj = {
    fx: fx,
    x: 2,
};
console.log(fx());
console.assert(fx() === 1, 'globe fx');
console.assert(obj.fx() === 2, 'obj.fx');

const a = {
    p: 'Hello',
    b: {
        m: function() {
            return this.p;
        }
    }
};

console.assert(a.b.m() === undefined );

