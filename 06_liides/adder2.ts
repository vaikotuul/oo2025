interface Adder{
    add(nr:number):void;
    getSum():number; 
    getAverage():number;
}

class charCounter{
    constructor(protected adder: Adder){}
    addWordCharacters(word: string): void {
        this.adder.add(word.length);
    }

    getCharacterCount():number{
        return this.adder.getSum(); 
    }
}
class storingAdder implements Adder{
    protected store: number[]=[]; 
    add(nr: number){
        this.store.push(nr);
    }
    getSum():number{
        let sum:number = 0;
        for(let amount of this.store){
            sum+=amount;
        }
        return sum;
    }
    getAverage(){
        if(this.store.length>0){
            return this.getSum()/this.store.length;
        } else {
            return 0;
        }
    }
    getRange(){
        if(this.store.length==0){
            return 0;
        }
        let min:number=this.store[0];
        let max:number=min;
        for(let amount of this.store){
            if(amount<min){
                min=amount;
            }
            if(amount>max){
                max=amount;
            }
        }
        return max-min;
    }
}

let adder1: storingAdder=new storingAdder();
let counter1: charCounter= new charCounter(adder1);

counter1.addWordCharacters("MIDA");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("Issand jumal");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("vaiko");
console.log(counter1.getCharacterCount());

console.log(adder1.getAverage());

console.log(adder1.getRange());