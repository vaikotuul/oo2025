var charCounter = /** @class */ (function () {
    //constructor mis võtab  ja lisab Adder objekti parameetrina ja hoiab seda protected variable-is
    function charCounter(adder) {
        this.adder = adder;
    }
    // lisab tähtede arvu Adder meetodile mis on disainitud korjama stringe
    charCounter.prototype.addWordCharacters = function (word) {
        // word.length annab tähtede arvu sõnas
        this.adder.add(word.length);
    };
    // tagastab tähtede summa Adderis
    charCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return charCounter;
}());
var countingAdder = /** @class */ (function () {
    function countingAdder() {
        this.sum = 0; //esialgne summa on 0. Ilma esialgse summata oleks summa undefined
        this.count = 0;
        //    reset(){
        //        this.sum=0;
        //    }
    }
    countingAdder.prototype.add = function (nr) {
        this.sum += nr;
        this.count++;
    };
    countingAdder.prototype.getSum = function () {
        return this.sum;
    };
    countingAdder.prototype.getAverage = function () {
        if (this.count > 0) {
            return this.sum / this.count;
        }
        else {
            return 0;
        }
    };
    return countingAdder;
}());
var adder1 = new countingAdder();
var counter1 = new charCounter(adder1);
//adder1.add(3);
//adder1.add(5);
//adder1.add(5);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());
counter1.addWordCharacters("MIDA");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("Issand jumal");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("vaiko");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
