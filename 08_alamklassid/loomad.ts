abstract class Animal {
    constructor(public name: string, public age: number) {}

    abstract makeSound(): void;

    introduce(): void {
        console.log(`Minu nimi on ${this.name} ja ma olen ${this.age} aastat vana.`);
    }

    abstract move(): void;
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Auh-Auh!");
    }

    move(): void {
        console.log(`${this.name} jookseb kiiresti`);
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Mjäu!");
    }

    move(): void {
        console.log(`${this.name} suudab kõrgele hüpata`);
    }
}

class Bird extends Animal {
    constructor(name: string, age: number, public wingSpan: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Tširp-Tširp!");
    }

    move(): void {
        console.log(`${this.name} lendab tiibadega ${this.wingSpan}cm ulatuses`);
    }

    nest(): void {
        console.log(`${this.name} ehitab pesa`);
    }
}

const muri = new Dog("Muri", 5);
muri.introduce();  
muri.makeSound();  
muri.move();      

const miisu = new Cat("Miisu", 3);
miisu.introduce(); 
miisu.makeSound(); 
miisu.move();     

const tweet = new Bird("Linnuke", 2, 30);
tweet.introduce(); 
tweet.makeSound(); 
tweet.move();      
tweet.nest();      