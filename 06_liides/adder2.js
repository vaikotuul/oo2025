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
var storingAdder = /** @class */ (function () {
    function storingAdder() {
        this.store = [];
    }
    storingAdder.prototype.add = function (nr) {
        this.store.push(nr);
    };
    storingAdder.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        }
        return sum;
    };
    storingAdder.prototype.getAverage = function () {
        if (this.store.length > 0) {
            return this.getSum() / this.store.length;
        }
        else {
            return 0;
        }
    };
    storingAdder.prototype.getRange = function () {
        if (this.store.length == 0) {
            return 0;
        }
        var min = this.store[0];
        var max = this.store[0];
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            if (amount < min) {
                min = amount;
            }
            if (amount > max) {
                max = amount;
            }
        }
        return max - min;
    };
    return storingAdder;
}());
var adder1 = new storingAdder();
var counter1 = new charCounter(adder1);
counter1.addWordCharacters("MIDA");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("Issand jumal");
console.log(counter1.getCharacterCount());
counter1.addWordCharacters("vaiko");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
