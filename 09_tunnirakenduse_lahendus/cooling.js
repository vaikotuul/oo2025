var Cooling = /** @class */ (function () {
    function Cooling(roomTemperature) {
        this.roomTemperature = roomTemperature;
    }
    Cooling.prototype.estimateInitTemp = function (knownJugTemp, knownTime, knownCooling, desiredTime, desiredCooling) {
        var knownTempDifference = knownJugTemp - this.roomTemperature;
        var coolingRate = knownCooling / (knownTempDifference * knownTime);
        var requiredTempDiff = desiredCooling / (coolingRate * desiredTime);
        return this.roomTemperature + requiredTempDiff;
    };
    return Cooling;
}());
var c = new Cooling(20);
console.log("It would take", c.estimateInitTemp(80, 30, 1, 60, 1), "degrees for the jug to cool down 1 degree in 60 seconds.");
console.log("It would take", c.estimateInitTemp(40, 100, 1, 100, 3), "degrees for the jug to cool down 3 degrees in 100 seconds.");
