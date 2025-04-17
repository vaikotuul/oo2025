abstract class LogisticsUnit{
    abstract getInfo():string;
}

abstract class Cargo extends LogisticsUnit{
    protected abstract unit: string;
    protected abstract amount: number;

    getInfo():string{
        return `Amount: ${this.amount}${this.unit}`;
    }
}

class Liquid extends Cargo{
    protected unit: string = "l";
    protected amount: number;
    constructor(amount:number){
        super();
        this.amount = amount;
    }
}

class Solid extends Cargo{
    protected unit: string = "kg";
    protected amount: number;
    constructor(amount:number){
        super();
        this.amount = amount;
    }
}

let bensiin = new Liquid(300);
let küttepuud = new Solid(20000);

console.log(bensiin.getInfo());
console.log(küttepuud.getInfo());