function testInteger() {
    let p = 1;
    for (let i = 1; i <= 70; i++) {
        p *= i;
    }
    console.log(p);
}

testInteger();

function testBigInt() {
    let p = 1n;
    for (let i = 1n; i <= 70n; i++) {
        p *= i;
    }
    console.log(p);
}

testBigInt();