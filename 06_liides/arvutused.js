var inchesToCM = /** @class */ (function () {
    function inchesToCM() {
    }
    inchesToCM.prototype.calculate = function (x) {
        return x * 2.54;
    };
    inchesToCM.prototype.inputUnit = function () {
        return "inches";
    };
    inchesToCM.prototype.outputUnit = function () {
        return "cm";
    };
    return inchesToCM;
}());
var cmToInches = /** @class */ (function () {
    function cmToInches() {
    }
    cmToInches.prototype.calculate = function (x) {
        return x / 2.54;
    };
    cmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    cmToInches.prototype.outputUnit = function () {
        return "inches";
    };
    return cmToInches;
}());
