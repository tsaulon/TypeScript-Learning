//  Encapsulating demos into local functions 
function basicTypes() {
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
    var isDone = false;
    //  Number declarations (Represented as floating points and hex, octal, decimal, binary numbers support)
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    //  Strings
    var color = "Blue";
    //  Arrays
    var list1 = [1, 2, 3, 4];
    var list2 = [1, 2, 3, 4];
    //  Tuples
    //  Note: Express an array where the type of a fixed number of 
    //  elements is known, but need not be the same.
    //
    //  Example: Representation of a stringn and number
    var x;
    x = ["hello", 10];
    //  x = [10, "hello"]   Error!
    x[3] = 10;
    x[4] = "greetings";
    //  x[5] = true     Error: can't assign boolean value to (string | number) datatype
    //  Enums
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {})); //  Red: 0, Green: 1, Blue: 2
    var c = Color.Red;
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Green"] = 2] = "Green";
        Color2[Color2["Blue"] = 3] = "Blue";
    })(Color2 || (Color2 = {})); //  Red: 1, Green: 2, Blue: 3
    var Color3;
    (function (Color3) {
        Color3[Color3["Red"] = 1] = "Red";
        Color3[Color3["Green"] = 5] = "Green";
        Color3[Color3["Blue"] = 10] = "Blue";
    })(Color3 || (Color3 = {})); //  Red: 1, Green: 5, Blue: 10
    var num = Color3.Red;
    var identifier = Color3[1];
    console.log("Displaying as number: " + num);
    console.log("Displaying identifier: " + identifier);
    //  Any
    var notSure = 4; //  number
    notSure = "Now I am a string!"; //  string
    notSure = false; //  boolean
    var list = [1, false, "huehue", 20.9];
    console.log(list.toString());
}
basicTypes();
