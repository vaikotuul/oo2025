abstract class AbstractResistor {
    abstract getResistance(): number;
    getCurrent (u: number): number {
        return u / this.getResistance();
    }
}

class Resistor extends AbstractResistor{
    r: number=0;
    constructor(r: number) {
        // The super() keyword in TypeScript (and JavaScript) is used to call the constructor of the parent class (or superclass) from a subclass. 
        // It is required when a subclass has its own constructor and the parent class also has a constructor.
        super();
        this.r = r;
    }

    getResistance(): number {
        return this.r;
    }
}

class Switch extends AbstractResistor{
    private on: boolean = false;
    setOn(state: boolean) {
        this.on = state;
    }
    getResistance(): number {
        return this.on ? 0 : 1000000;
    }

    getCurrent(u: number): number {
        if (u>0 && this.on) {
            throw new Error("Short circuit");
        }
        return super.getCurrent(u);
    }
}

abstract class MultipleConnection extends AbstractResistor {
    resistors: AbstractResistor[] = [];
    
    addResistor(r: AbstractResistor) {
        this.resistors.push(r);
    }
}

class ParallelConnection extends MultipleConnection {
    getResistance(): number {
        let inverseSum: number = 0;
        for (let r of this.resistors) {
            inverseSum += 1 / r.getResistance();
        }

        return 1 / inverseSum;
    }
}

let p:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(330));
p.addResistor(new Resistor(470));
//console.log("Parallel connection resistance:", p.getResistance());

let totalResistance = p.getResistance();
console.log("Total resistance:", totalResistance);

let voltage=5;
let current=voltage/p.getResistance();
console.log("Current:", current);

let p2:ParallelConnection = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
console.log("Parallel connection resistance:", p2.getResistance());

let voltage2=5;
let current2=voltage2/p2.getResistance();
console.log("Current:", current2);

// R = R1 + R2
// R = 1 / (1/R1 + 1/R2)

class SeriesConnection extends MultipleConnection {
    getResistance(): number {
        let totalResistance: number = 0
        for(let r of this.resistors) {
            totalResistance += r.getResistance();
        }
        return totalResistance;
    }
}

let s:SeriesConnection = new SeriesConnection();
s.addResistor(new Resistor(100));
s.addResistor(new Resistor(200));
s.addResistor(new Resistor(50));
let totalResistanceS = s.getResistance();
console.log("Total resistance for series connection:", totalResistanceS);

let s1:SeriesConnection = new SeriesConnection();
s1.addResistor(new Resistor(110));
s1.addResistor(new Resistor(220));

let s2:SeriesConnection = new SeriesConnection();
s2.addResistor(new Resistor(220));
s2.addResistor(new Resistor(440));

let s3:SeriesConnection = new SeriesConnection();
s3.addResistor(s1);
s3.addResistor(s2);
console.log("Total resistance for the two series connection:", s3.getResistance());

//110 + 220 + 220 + 440 = 990
//create a parrallel connection with the newly created series connection as one component and a resistor with a resistance of 330 ohms
let p3:ParallelConnection = new ParallelConnection();
p3.addResistor(new Resistor(330));
p3.addResistor(s1);
console.log("Total resistance for the parallel+series connection:", p3.getResistance());

let circuit: AbstractResistor[]=[new Resistor(100), new Switch()];

for (let element of circuit) {
    console.log(element.getResistance());
}

function sumResistance(element: AbstractResistor[]): number{
    let sum = 0;
    for (let r of element) {
        sum += r.getResistance();
    }
    return sum;
}

console.log("Total resistance:", sumResistance(circuit));
(circuit[1] as Switch).setOn(true);
console.log("Total resistance:", sumResistance(circuit));

//let s1 = new Switch();
//s1.setOn(true);
//console.log(s1.getResistance());
//console.log(s1.getCurrent(5));
//let r1:AbstractResistor = new Resistor(220);
//console.log(r1.getResistance());