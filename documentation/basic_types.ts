//  Type Annotations
function typedGreeter(person: string){
    return `Hello, ${person}`
}

//  Omit declaration, cannot duplicate variable with same identities among other .ts files
var arr = [0, 1, 2]

console.log(typedGreeter(arr))  //  error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
