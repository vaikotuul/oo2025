interface Adder{
    add(nr:number):void; //meetod numbri lisamiseks
    getSum():number; //meetod summa saamiseks
    reset():void;
}

class charCounter{
    //constructor mis võtab  ja lisab Adder objekti parameetrina ja hoiab seda protected variable-is
    constructor(protected adder: Adder){}
    // lisab tähtede arvu Adder meetodile mis on disainitud korjama stringe
    addWordCharacters(word: string): void {
        // word.length annab tähtede arvu sõnas
        this.adder.add(word.length);
    }
    // tagastab tähtede summa Adderis
    getCharacterCount():number{
        return this.adder.getSum(); 
    }
}
class simpleAdder implements Adder{
    protected sum: number = 0; //esialgne summa on 0. Ilma esialgse summata oleks summa undefined
    add(nr: number){
        this.sum+=nr;
    }
    getSum():number{ //tagastab summa
        return this.sum
    }
    reset(){
        this.sum=0;
    }

}

let adder1: Adder=new simpleAdder();
let counter1: charCounter= new charCounter(adder1);
adder1.add(3);
adder1.add(5);
adder1.add(5);
adder1.add(5);
console.log(adder1.getSum());
adder1.reset();
console.log(adder1.getSum());

counter1.addWordCharacters("MIDA");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("Issand jumal");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("vaiko");
console.log(counter1.getCharacterCount());

