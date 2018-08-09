function declaringClasses() {
  class Greeter {

    greeting: string
    constructor(greeting: string) {
        this.greeting = greeting;
     }
    greet() {
      return `Hello, ${this.greeting}`;
    }
  }

  let greeter = new Greeter("World!");

  console.log(greeter.greet())
}

declaringClasses();

function inheritance(){
    class Animal {
        move(distanceInMetres: number = 0){
            console.log(`The animal moved ${distanceInMetres}m.`)
        }
    }

    class Dog extends Animal {
        bark(){
            console.log("Woof! Woof!");
        }
    }

    const dog = new Dog();

    dog.bark();
    dog.move(10);
    dog.bark();

}

function complexInheritance(){

        class Animal {
            name: string;
            constructor(name: string){
                this.name = name;
            }
            move(distanceInMetres: number){
                console.log(`${this.name} moved ${distanceInMetres}m.`)
            }
        }

        class Snake extends Animal{
            constructor(name: string){
                super(name);
            }

            move(distanceInMetres: number = 5){
                console.log("Slithering... ");
                super.move(distanceInMetres);
            }
        }

        class Horse extends Animal{
            constructor(name: string){
                super(name);
            }

            move(distanceInMetres: number = 45){
                console.log("Galloping... ");
                super.move(distanceInMetres);
            }
        }

        let peter = new Snake("Peter the snake");   // Implicit declaration of snake datatype
        let harry: Animal = new Horse("Harry the horse");   //  Explicit declaration of Animal datatype

        peter.move();
        harry.move(100);    //  refers to the base class function 'move' and requires an argument.

}

complexInheritance();


inheritance();
