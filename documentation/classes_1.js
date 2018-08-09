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
function declaring() {
    var Greeter = /** @class */ (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("World!");
    console.log(greeter.greet());
}
declaring();
function inher() {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distanceInMetres) {
            if (distanceInMetres === void 0) { distanceInMetres = 0; }
            console.log("The animal moved " + distanceInMetres + "m.");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log("Woof! Woof!");
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
}
inher();
function complexInher() {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distanceInMetres) {
            console.log(this.name + " moved " + distanceInMetres + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMetres) {
            if (distanceInMetres === void 0) { distanceInMetres = 5; }
            console.log("Slithering... ");
            _super.prototype.move.call(this, distanceInMetres);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMetres) {
            if (distanceInMetres === void 0) { distanceInMetres = 45; }
            console.log("Galloping... ");
            _super.prototype.move.call(this, distanceInMetres);
        };
        return Horse;
    }(Animal));
    var peter = new Snake("Peter the snake"); // Implicit declaration of snake datatype
    var harry = new Horse("Harry the horse"); //  Explicit declaration of Animal datatype
    peter.move();
    harry.move(100); //  refers to the base class function 'move' and requires an argument.
}
complexInher();
function propertyAcc() {
    var Foo = /** @class */ (function () {
        function Foo(defaultt, pubFoo, privFoo, proFoo) {
            this.defaultt = defaultt;
            this.pubFoo = pubFoo;
            this.privFoo = privFoo;
            this.proFoo = proFoo;
        }
        return Foo;
    }());
    var Bar = /** @class */ (function (_super) {
        __extends(Bar, _super);
        function Bar(defaultt, pubFoo, privFoo, proFoo) {
            return _super.call(this, defaultt, pubFoo, privFoo, proFoo) || this;
        }
        Bar.prototype.proteccc = function () {
            return this.proFoo;
        };
        return Bar;
    }(Foo));
    var foo = new Foo(1, 2, 3, 4);
    var bar = new Bar(1, 2, 3, 4);
    console.log(foo.defaultt);
    console.log(foo.pubFoo);
    //  console.log(foo.privFoo);   Not accessible
    //  console.log(foo.proFoo);    Not accessible
    console.log(bar.proteccc());
    console.log(foo.roFoo);
}
propertyAcc();
function simpleAcc() {
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        return Employee;
    }());
    var emp = new Employee();
    emp.fullName = "Tyrone Saulon";
    console.log(emp.fullName);
    if (emp.fullName) {
        console.log(emp.fullName);
    }
}
simpleAcc();
/*

GETTERS AND SETTERS ARE ONLY COMPATIBLE WITH SCRIPTS TARGETING ECMA5+ AND UP.
function complexAcc(){

    let passcode = "secret"
    class Employee{
        _fullName: string;

        get fullName(): string{
            return this.fullName;
        }
        set fullName(newName: string){
            passcode && passcode === "secret" ? this._fullName = newName : console.log("Unauthorized employee!");
        }
    }

    let emp = new Employee();
    emp._fullName = "Tyrone Saulon"
    if(emp.fullName){
        console.log(emp.fullName);
    }
}

complexAcc();

*/ 
