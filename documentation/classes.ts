function declaringClasses(){
  class Greeter {
    greeting: string;
    constructor (greeting: string) {
        this.greeting = greeting;
     }
    greet() {
      return `Hello, ${this.greeting}`;
    }
  }

  let greeter = new Greeter("World!");
  console.log(greeter.greet())
}

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

inheritance();

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

function propertyAccess(){

    class Foo {
        
        defaultt;    //  class member variables are public by default
        public pubFoo;  //  class member can be publicly accessed
        private privFoo;    //  class member cannot be directly accessed by entities outside the class
        protected proFoo;   //  class member can only be accessed by derived classes of the same class hierarchy.
        readonly roFoo; //  imitates the keyword 'const' in the context of classes.

        constructor(defaultt: number, pubFoo: number, privFoo: number, proFoo: number){
            this.defaultt = defaultt;
            this.pubFoo = pubFoo;
            this.privFoo = privFoo;
            this.proFoo = proFoo;
        }
    }

    class Bar extends Foo{

        constructor(defaultt: number, pubFoo: number, privFoo: number, proFoo: number){
            super(defaultt, pubFoo, privFoo, proFoo);
        }
        proteccc(){
            return this.proFoo;
        }
    }

    let foo: Foo = new Foo(1, 2, 3, 4);
    let bar: Bar = new Bar(1, 2, 3, 4);
    console.log(foo.defaultt);
    console.log(foo.pubFoo);
    //  console.log(foo.privFoo);   Not accessible
    //  console.log(foo.proFoo);    Not accessible
    console.log(bar.proteccc());
}

propertyAccess();