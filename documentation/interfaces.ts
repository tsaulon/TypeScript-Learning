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


/*
 *  Interfaces
 *  >   Virtually type checks without using any class instances
 *  >   Can do custom datatyping on objects
 *  >   Captures only properties identical to interface properties
 *  >   Does not generate any source code
 * 
 * 
 */