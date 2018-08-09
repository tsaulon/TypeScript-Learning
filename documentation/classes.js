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
function declaringClasses() {
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
declaringClasses();
function inheritance() {
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
inheritance();
