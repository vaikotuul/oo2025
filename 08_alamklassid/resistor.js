var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        // The super() keyword in TypeScript (and JavaScript) is used to call the constructor of the parent class (or superclass) from a subclass. 
        // It is required when a subclass has its own constructor and the parent class also has a constructor.
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 1000000;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error("Short circuit");
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var r = _a[_i];
            inverseSum += 1 / r.getResistance();
        }
        return 1 / inverseSum;
    };
    return ParallelConnection;
}(MultipleConnection));
var p = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(330));
p.addResistor(new Resistor(470));
//console.log("Parallel connection resistance:", p.getResistance());
var totalResistance = p.getResistance();
console.log("Total resistance:", totalResistance);
var voltage = 5;
var current = voltage / p.getResistance();
console.log("Current:", current);
var p2 = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
console.log("Parallel connection resistance:", p2.getResistance());
var voltage2 = 5;
var current2 = voltage2 / p2.getResistance();
console.log("Current:", current2);
// R = R1 + R2
// R = 1 / (1/R1 + 1/R2)
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var totalResistance = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var r = _a[_i];
            totalResistance += r.getResistance();
        }
        return totalResistance;
    };
    return SeriesConnection;
}(MultipleConnection));
var s = new SeriesConnection();
s.addResistor(new Resistor(100));
s.addResistor(new Resistor(200));
s.addResistor(new Resistor(50));
var totalResistanceS = s.getResistance();
console.log("Total resistance for series connection:", totalResistanceS);
var s1 = new SeriesConnection();
s1.addResistor(new Resistor(110));
s1.addResistor(new Resistor(220));
var s2 = new SeriesConnection();
s2.addResistor(new Resistor(220));
s2.addResistor(new Resistor(440));
var s3 = new SeriesConnection();
s3.addResistor(s1);
s3.addResistor(s2);
console.log("Total resistance for the two series connection:", s3.getResistance());
//110 + 220 + 220 + 440 = 990
//create a parrallel connection with the newly created series connection as one component and a resistor with a resistance of 330 ohms
var p3 = new ParallelConnection();
p3.addResistor(new Resistor(330));
p3.addResistor(s1);
console.log("Total resistance for the parallel+series connection:", p3.getResistance());
var circuit = [new Resistor(100), new Switch()];
for (var _i = 0, circuit_1 = circuit; _i < circuit_1.length; _i++) {
    var element = circuit_1[_i];
    console.log(element.getResistance());
}
function sumResistance(element) {
    var sum = 0;
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var r = element_1[_i];
        sum += r.getResistance();
    }
    return sum;
}
console.log("Total resistance:", sumResistance(circuit));
circuit[1].setOn(true);
console.log("Total resistance:", sumResistance(circuit));
//let s1 = new Switch();
//s1.setOn(true);
//console.log(s1.getResistance());
//console.log(s1.getCurrent(5));
//let r1:AbstractResistor = new Resistor(220);
//console.log(r1.getResistance());
