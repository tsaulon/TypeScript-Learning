var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
//  Localizing notes to module as to prevent naming convention conflicts.
function variableDeclarations() {
    var _a;
    //  function closures
    function multiplyBy(num) {
        var left = num;
        return function (right) {
            return left * right;
        };
    }
    var multiplyBy10 = multiplyBy(10);
    console.log(multiplyBy10(7)); //  70
    console.log(multiplyBy10(8)); //  80
    console.log(multiplyBy10(9)); //  90
    //  Destructuring Arrays
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log(first); //  1
    console.log(second); //  2
    //  swapping variables
    _a = [second, first], first = _a[0], second = _a[1];
    console.log(first); //  2
    console.log(second); //  1
    //  function parameter uses
    function foo(_a) {
        var first = _a[0], second = _a[1];
        console.log(first);
        console.log(second);
    }
    foo([first, second]);
    //  rest parameters
    var _b = [1, 2, 3, 4], one = _b[0], rest = _b.slice(1);
    console.log(first); //  1
    console.log(rest); //   [2, 3, 4]
    //  grabbing first element of array
    var firstFoo = [1, 2, 3, 4][0];
    console.log(firstFoo); //   1
    //  Destructuring Objects
    var o = {
        a: 'foo',
        b: 12,
        c: 'bar',
        d: 'baz'
    };
    //  capturing identifiers a & b
    var a = o.a, b = o.b, passthrough = __rest(o, ["a", "b"]);
    console.log(a + ' ' + b); //  foo 12
    console.log(o.a + ' ' + o.b + ' ' + o.c); //  foo 12 bar
    //  type casting from string to number
    console.log(b + passthrough.d.length); //  15
    function fuzz(_a) {
        var a = _a.a, b = _a.b;
        return a + " and " + ((b) ? b : '');
    }
    var z = { a: "ainsley" };
    console.log(fuzz(z));
}
variableDeclarations();
