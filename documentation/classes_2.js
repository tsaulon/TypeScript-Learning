var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function staticClasses() {
    var Grid = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = point.x - Grid.origin.x; //  prepend class identifier to access static members
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale; //  prepend 'this' to access instance members
        };
        //  'static' lets all instances of this class see this variable.
        //  the variable is declared on the object and not the instance variable.
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var a = new Grid(1.0);
    var b = new Grid(5.0);
    console.log(a.calculateDistanceFromOrigin({ x: 10, y: 10 }).toFixed(2));
    console.log(b.calculateDistanceFromOrigin({ x: 10, y: 10 }).toFixed(2));
}
staticClasses();
function abstractClasses() {
    //  Abstract classes are base classes which other classes can be derived.
    //  Cannot instantiated directly 
    //  Different from an interface because abstract classes member functions can have implementations.
    //  Very similar to C++ 'virtual' keyword.
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log("Roaming the Earth");
        };
        return Animal;
    }());
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log("Department Name: " + this.name);
        };
        return Department;
    }());
    var Accounting = /** @class */ (function (_super) {
        __extends(Accounting, _super);
        function Accounting() {
            return _super.call(this, "Accounting and Auditing") || this;
        }
        Accounting.prototype.printMeeting = function () {
            console.log("The accounting department meets each Monday at 10 a.m.");
        };
        Accounting.prototype.generateReports = function () {
            console.log("Generating accounting reports...");
        };
        return Accounting;
    }(Department));
    var department; //  declare department as part of Department hierarchy
    //  department = new Department()   Error: Cannot create instance of abstract class
    department = new Accounting();
    department.printName();
    department.printMeeting();
    //  department.generateReports();   Error: Method does not exist on declared abstract type.
    //  Access to above method must have 'department' declared as of datatype 'Accounting'
    //  accessing both abstract base methods and derived methods.
}
abstractClasses();
function advTechniques_1() {
    var Greeter = /** @class */ (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting + "!";
        };
        return Greeter;
    }());
    var greeter = new Greeter("world"); //  'new' keyword references the class constructor
    console.log(greeter.greet());
}
advTechniques_1();
function advTechniques_2() {
    var Greeter = /** @class */ (function () {
        function Greeter() {
        }
        Greeter.prototype.greet = function () {
            return this.greeting ? this.greeting : Greeter.standardGreeting;
        };
        Greeter.standardGreeting = "Hello, there!";
        return Greeter;
    }());
    var greeter1 = new Greeter();
    console.log(greeter1.greet());
    var greeterMaker = Greeter;
    greeterMaker.standardGreeting = "Hey there!"; // referencing the static property.
    var greeter2 = new Greeter();
    console.log(greeter2.greet());
}
advTechniques_2();
