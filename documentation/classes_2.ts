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
}

abstractClasses()