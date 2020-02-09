
console.log("\u0061");
console.log("\uD842\uDFB7");
console.log("\u20BB7");
console.log("\u{20BB7}");
console.assert('\u{1F680}' === '\uD83D\uDE80');

let text = String.fromCodePoint(0x20BB7);
console.log(text.length);
console.assert(text.length === 2);
for (let i of text) {
    console.assert(i === '𠮷');
}

const json = '"\u2028"';
console.log(JSON.parse(json));

console.log(JSON.stringify('\u{D834}'));
console.log(JSON.stringify('\uDF06\uD834'));

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
console.assert(`Hello ${name}, how are you ${time}?` === 'Hello Bob, how are you today?');

function fn() {
    return "Hello World";
}


console.assert(`foo ${fn()} bar` === 'foo Hello World bar');
console.assert(`Hello ${'World'}` === 'Hello World');


const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));


let func = (name) => `Hello ${name}!`;

console.assert(func('Jack') === "Hello Jack!");


let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template){
    const evalExpr = /<%=(.+?)%>/g;
    const expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    let script =
        `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}

let parse = eval(compile(template));
console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));


let a = 5;
let b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;



let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    let result = '';
    let i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.assert(msg === "The total is 30 (31.5 with tax)");


function SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
let sender = '<script>alert("abc")</script>'; // 恶意代码
message = SaferHTML`<p>${sender} has sent you a message.</p>`;

console.assert(message === '<p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>');

console.log`123`;

function rawTest(strings) {
    console.log(strings.raw[0]);
    // strings.raw[0] 为 "First line\\nSecond line"
    // 打印输出 "First line\nSecond line"
}
console.log(rawTest`First line\nSecond line`);