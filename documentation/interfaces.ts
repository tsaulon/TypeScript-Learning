function firstInterface(){

    //  Interface defined in function parameter datatype declaration
    function printLabel(labellledObj: {label: string}){ //  labelledObj of type Object with a string property
        console.log(labellledObj.label)
    }

    let obj = {
        size: 10,
        label: "lol I'm a label."
    }

    printLabel(obj)
}

firstInterface()

function secondInterface(){
    
    //  Interface defined here
    interface LabelledValue{
        label: string;
    }

    //  capture properties of argument objects where
    //  identifiers are identical to interface properties
    function printLabel(labelledObj: LabelledValue){
        console.log(labelledObj.label)
    }

    let obj = {
        size: 10,
        label: "ayy lmao, why are there two labels?"
    }

    printLabel(obj)
}

secondInterface();

function thirdInterface(){

    //  Interface with optional properties
    interface SquareConfig{
        color?: string,
        width?: number
    }

    function createSquare(config: SquareConfig): {color: string, area: number}{

        let tmp = {color: "white", area: 100}

        if(config.color){
            tmp.color = config.color;
        }

        if(config.width){
            tmp.area = config.width * config.width;
        }

        return tmp;
    }

    let mySquare = createSquare({color: "black"})

    console.log(mySquare)
}

thirdInterface()

function fourthInterface(){

    // Interface with read-only properties
    interface Point{
        readonly x: number,
        readonly y: number
    }

    let p1: Point = {x: 10, y: 0}

    //  p1.x = 5    Error: illegal change to property
}

fourthInterface()

function fifthInterface(){

    //  Interface with function types
    interface SearchFunc{
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = (source: string, subString: string) => {
        return source.search(subString) > -1
    }

    console.log(mySearch("Blood Harvest", "ood"))
}

fifthInterface()

function sixthInterface(){

    //  Interface with index types
    interface StringArray{
        [index: number]: string;
    }

    let arr: StringArray = ["Tyrone", "Ainsley", "Atlas"]

    console.log(arr[0] + ' + ' + arr[1] + ' = ' + arr[2])
}

sixthInterface()

function seventhInterface(){

    //  Incorrect interface implementation for class types
    interface ClockInterface{
        currentTime: Date;
        setTime(d: Date);
        //  new (hour: number, m: number);  Error: No signature for 'new'
        //  Note:   Only instance side is checked and the class implementation of interface cannot
        //          see the constructor signature of 'new'.
    } 

    class Clock implements ClockInterface{
        currentTime: Date;

        constructor(h: number, m: number) { }
        
        setTime(d: Date){
            this.currentTime = d;
        }
    }
}

seventhInterface();

/*
 *  Interfaces
 *  >   Virtually type checks without using any class instances
 *  >   Can do custom datatyping on objects
 *  >   Captures only properties identical to interface properties
 *  >   Does not generate any source code
 * 
 *  Variable Prefixes
 *  >   Use readonly when prefixing properties
 *  >   Use const when prefixing variables
 * 
 *  TODO:   
 *  >   Pick up at using interfaces containing indexable types with classes.
 *  >   Read through TypeScript classes first before this.
 */