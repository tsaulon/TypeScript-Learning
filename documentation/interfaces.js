function firstInterface() {
    //  Interface defined in function parameter datatype declaration
    function printLabel(labellledObj) {
        console.log(labellledObj.label);
    }
    var obj = {
        size: 10,
        label: "lol I'm a label."
    };
    printLabel(obj);
}
firstInterface();
function secondInterface() {
    //  capture properties of argument objects where
    //  identifiers are identical to interface properties
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var obj = {
        size: 10,
        label: "ayy lmao, why are there two labels?"
    };
    printLabel(obj);
}
secondInterface();
function thirdInterface() {
    function createSquare(config) {
        var tmp = { color: "white", area: 100 };
        if (config.color) {
            tmp.color = config.color;
        }
        if (config.width) {
            tmp.area = config.width * config.width;
        }
        return tmp;
    }
    var mySquare = createSquare({ color: "black" });
    console.log(mySquare);
}
thirdInterface();
function fourthInterface() {
    var p1 = { x: 10, y: 0 };
    try {
        p1 = { x: 20, y: 20 };
    }
    catch (e) {
        console.log(e.message);
    }
}
fourthInterface();
/*
 *  Interfaces
 *  >   Virtually type checks without using any class instances
 *  >   Can do custom datatyping on objects
 *  >   Captures only properties identical to interface properties
 *  >   Does not generate any source code
 *
 *
 */ 
