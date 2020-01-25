
function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

function test1() {
    throw new UserError(test1.name)
}
function test2() {
    throw new UserError(test2.name)
}


try {
 test1()
} catch (e) {
    console.error(e.name + ' ' +e.message);
    console.debug(e.stack);
    try {
        test2()
    } catch (e) {
        console.error(e.name + e.message);
        console.debug(e.stack);
    }
}