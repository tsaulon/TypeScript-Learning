//  Encapsulating demos into local functions 
function basicTypes(): void{
    /*
    //  Type Annotations
    function typedGreeter(person: string){
        return `Hello, ${person}`
    }

    //  Omit declaration, cannot duplicate variable with same identities among other .ts files
    var arr = [0, 1, 2]

    console.log(typedGreeter(arr))  //  error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
    */


    //  IMPORTANT!  Declare datatypes in Lower Case
    //              UpperCase points to Non-Primitive types in JavaScript
    //  Boolean declarations
    let isDone: boolean = false;

    //  Number declarations (Represented as floating points and hex, octal, decimal, binary numbers support)
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    //  Strings
    let color: string = "Blue";

    //  Arrays
    let list1: number[] = [1, 2, 3, 4];
    let list2: Array<number> = [1, 2, 3, 4];

    //  Tuples
    //  Note: Express an array where the type of a fixed number of 
    //  elements is known, but need not be the same.
    //
    //  Example: Representation of a stringn and number
    let x: [string, number]
    x = ["hello", 10];
    //  x = [10, "hello"]   Error!
    x[3] = 10
    x[4] = "greetings"
    //  x[5] = true     Error: can't assign boolean value to (string | number) datatype

    //  Enums
    enum Color{Red, Green, Blue}    //  Red: 0, Green: 1, Blue: 2
    let c: Color = Color.Red

    enum Color2{Red = 1, Green, Blue}   //  Red: 1, Green: 2, Blue: 3

    enum Color3{Red = 1, Green = 5, Blue = 10}  //  Red: 1, Green: 5, Blue: 10
    let num: number = Color3.Red
    let identifier: string = Color3[1]
    console.log(`Displaying as number: ${num}`)
    console.log(`Displaying identifier: ${identifier}`)

    //  Any
    let notSure: any = 4;   //  number
    notSure = "Now I am a string!"  //  string
    notSure = false //  boolean
    let list: Array<any> = [1, false, "huehue", 20.9]
    console.log(list.toString())

    //  Type Assertions
    let someValue: any = "this is a string"
    let strLength1: number = (<string>someValue).length;
    let strLength2: number = (someValue as string).length;

    console.log(`string length of '${someValue}' plus 2 is ${strLength1 + 2}`);
    console.log(`string length of '${someValue}' plus 2 is ${strLength2 + 2}`);
    console.log(`string length of '${someValue}' plus 2 is ${(<string>someValue).length + 2}`);
    console.log(`string length of '${someValue}' plus 2 is ${(someValue as string).length + 2}`);
}

basicTypes()