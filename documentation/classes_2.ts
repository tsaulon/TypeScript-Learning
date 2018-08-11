function staticClasses(){

    interface Point{
        x: number,
        y: number
    }

    class Grid {

        //  'static' lets all instances of this class see this variable.
        //  the variable is declared on the object and not the instance variable.
        static origin: Point = {x: 0, y: 0};
        constructor(public scale: number) { }
        calculateDistanceFromOrigin(point: Point) {

            let xDist = point.x - Grid.origin.x;    //  prepend class identifier to access static members
            let yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;   //  prepend 'this' to access instance members
        }
    }

    let a = new Grid(1.0);
    let b = new Grid(5.0);

    console.log(a.calculateDistanceFromOrigin({x: 10, y: 10}).toFixed(2));
    console.log(b.calculateDistanceFromOrigin({x: 10, y: 10}).toFixed(2));

}

staticClasses();

function abstractClasses(){

    //  Abstract classes are base classes which other classes can be derived.
    //  Cannot instantiated directly 
    //  Different from an interface because abstract classes member functions can have implementations.
    //  Very similar to C++ 'virtual' keyword.
    abstract class Animal {
        abstract makeSound(): void;
        move(): void{
            console.log("Roaming the Earth")
        }
    }

    abstract class Department {
        constructor(public name: string) {}
        printName(): void{
            console.log(`Department Name: ${this.name}`);
        }
        abstract printMeeting(): void;
    }

    class Accounting extends Department {
        constructor(){
            super("Accounting and Auditing");   //  reference and populate base class
        }

        printMeeting(): void{
            console.log("The accounting department meets each Monday at 10 a.m.");
        }

        generateReports(): void{
            console.log("Generating accounting reports...");
        }
    }

    let department: Department; //  declare department as part of Department hierarchy
        //  department = new Department()   Error: Cannot create instance of abstract class
        department = new Accounting();

        department.printName();
        department.printMeeting();
        //  department.generateReports();   Error: Method does not exist on declared abstract type.
        //  Access to above method must have 'department' declared as of datatype 'Accounting'
        //  accessing both abstract base methods and derived methods.
}

abstractClasses()

function advTechniques_1(){

    class Greeter {
        constructor(public greeting: string) { }
        greet(): string{
            return `Hello, ${this.greeting}!`;
        }
    }

    let greeter: Greeter = new Greeter("world");    //  'new' keyword references the class constructor
    console.log(greeter.greet());
}

advTechniques_1();

function advTechniques_2() {

    //  Manipulating a class' static variables.
    class Greeter{

        static standardGreeting: string = "Hello, there!";
        greeting: string;
        greet(): string{
            return this.greeting ? this.greeting : Greeter.standardGreeting;
        }
    }

    let greeter1: Greeter = new Greeter();
    console.log(greeter1.greet()) 

    let greeterMaker: typeof Greeter = Greeter;     //  Declare variable to hold the class itself (..rather than the instance type)
    greeterMaker.standardGreeting = "Hey there!";   // Making change to the static property.

    let greeter2: Greeter = new Greeter();
    console.log(greeter2.greet());  //  referencing new change to the static property of Greeter.
}

advTechniques_2();

function interfaceClasses(){

    interface Point2D{
        x: number,
        y: number
    }

    interface Point3D extends Point2D{
        z: number
    }

    let point: Point3D = {x: 0, y: 0, z: 12}

    console.log(`x: ${point.x}, y: ${point.y}, z: ${point.z}`)
}

interfaceClasses();