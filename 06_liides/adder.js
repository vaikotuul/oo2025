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
var simpleAdder = /** @class */ (function () {
    function simpleAdder() {
        this.sum = 0; //esialgne summa on 0. Ilma esialgse summata oleks summa undefined
    }
    simpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    simpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    simpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return simpleAdder;
}());
var adder1 = new simpleAdder();
var counter1 = new charCounter(adder1);
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
