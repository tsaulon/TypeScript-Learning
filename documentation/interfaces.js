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
    //  p1.x = 5    Error: illegal change to property
}
fourthInterface();
function fifthInterface() {
    var mySearch;
    mySearch = function (source, subString) {
        return source.search(subString) > -1;
    };
    console.log(mySearch("Blood Harvest", "ood"));
}
fifthInterface();
function sixthInterface() {
    var arr = ["Tyrone", "Ainsley", "Atlas"];
    console.log(arr[0] + ' + ' + arr[1] + ' = ' + arr[2]);
}
sixthInterface();
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
 */ 
