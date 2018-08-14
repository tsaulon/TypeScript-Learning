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
function seventhInterface() {
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
}
seventhInterface();
function eighthInterface() {
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    var DigitalClock = /** @class */ (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.log("Beep beep!");
        };
        return DigitalClock;
    }());
    var AnalogClock = /** @class */ (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log("Tick tock!");
        };
        return AnalogClock;
    }());
    var digital = createClock(DigitalClock, 8, 30);
    var analog = createClock(AnalogClock, 10, 30);
}
eighthInterface();
function ninthInterface() {
    var square = {};
    square.color = "red";
    square.sideLength = 25;
    square.details = function () {
        return "(Square) => color: " + square.color + ", sideLength: " + square.sideLength;
    };
    console.log(square.details());
}
ninthInterface();
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
