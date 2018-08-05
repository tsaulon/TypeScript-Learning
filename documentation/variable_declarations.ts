//  Localizing notes to module as to prevent naming convention conflicts.
function variableDeclarations(){

    //  function closures
    function multiplyBy(num: number){
        let left = num;

        return (right: number) => {
            return left * right;
        }
    }

    let multiplyBy10 = multiplyBy(10)
    console.log(multiplyBy10(7));   //  70
    console.log(multiplyBy10(8));   //  80
    console.log(multiplyBy10(9));   //  90

    //  Destructuring Arrays
    let input = [1, 2]
    let [first, second] = input;

    console.log(first);  //  1
    console.log(second); //  2

    //  swapping variables
    [first, second] = [second, first]

    console.log(first)  //  2
    console.log(second) //  1

    //  function parameter uses
    function foo([first, second]: [number, number]){
        console.log(first);
        console.log(second);
    }

    foo([first, second]);

    //  rest parameters
    let [one, ...rest] = [1, 2, 3, 4]
    console.log(first); //  1
    console.log(rest); //   [2, 3, 4]

    //  grabbing first element of array
    let [firstFoo] = [1, 2, 3, 4];
    console.log(firstFoo); //   1


    //  Destructuring Objects
    let o = {
        a: 'foo',
        b: 12,
        c: 'bar',
        d: 'baz'
    }

    //  capturing identifiers a & b
    let {a, b, ...passthrough} = o;

    console.log(a + ' ' + b)    //  foo 12
    console.log(o.a + ' ' + o.b + ' ' + o.c)    //  foo 12 bar
    //  type casting from string to number
    console.log(b + passthrough.d.length)   //  15

    /*
        Renaming properties
        let{a: newID1, b: newID2} = o

        Type declarations
        let {a, b} : {a: string, b: number} = o
    */

    //  Function Declarations

    type C = {a: string, b?: number}
    function fuzz({a, b}: C): string{
        return `${a} and ${b}`
    }

    let z: C = {a: "ainsley"}
    console.log(fuzz(z))
}

variableDeclarations()