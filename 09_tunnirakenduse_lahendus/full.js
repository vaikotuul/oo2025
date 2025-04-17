"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Simulation = /** @class */ (function () {
    function Simulation(waterAmount, temperature, heatingPower, roomTemperature) {
        this.specialHeatCapacity = 4200;
        if (waterAmount > 2000) {
            throw new Error("The max capacity is 2 liters!");
        }
        this.waterAmount = waterAmount;
        this.temperature = temperature;
        this.heatingPower = heatingPower;
        this.roomTemperature = roomTemperature;
        this.joulesPerSecKelvin = 1.0 * 4200 * 2 / (100 * (100 - 20));
    }
    Simulation.prototype.getTemperature = function () {
        return this.temperature;
    };
    Simulation.prototype.heat = function (seconds) {
        var joules = this.heatingPower * seconds;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    };
    Simulation.prototype.cool = function (seconds) {
        var joules = (this.temperature - this.roomTemperature) * this.joulesPerSecKelvin;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature -= deltaTemperature;
    };
    Simulation.prototype.pourOut = function (amount) {
        if (amount >= this.waterAmount) {
            throw new Error("The jug doesn't have that much water!");
        }
        this.waterAmount -= amount;
    };
    Simulation.prototype.simulateCooling = function (waterAmount, heatingPower, roomTemperature) {
        var kettle = new Simulation(waterAmount, 95, heatingPower, roomTemperature);
        var secondsToCool = 0;
        while (kettle.getTemperature() > 90) {
            kettle.cool(1);
            secondsToCool++;
        }
        console.log("Cooling simulation for ".concat(waterAmount, " at ").concat(roomTemperature, " took ").concat(secondsToCool, " to cool."));
        console.log("Cooling from 95 to 90 ".concat(secondsToCool));
        return secondsToCool;
    };
    return Simulation;
}());
var cool = new Simulation(1000, 100, 1500, 20);
cool.cool(100);
for (var i = 0; i < 9; i++) {
    cool.cool(100);
    console.log(cool.getTemperature());
}
var roomTemperature = 20;
var kettle = new Simulation(1000, 20, 1500, roomTemperature);
var secondsToBoil = 0;
while (kettle.getTemperature() < 100) {
    kettle.heat(1);
    secondsToBoil++;
}
console.log(secondsToBoil);
kettle.cool(60);
console.log("After 1 minute of cooling: ", kettle.getTemperature());
kettle.pourOut(400);
kettle.cool(180);
console.log("After pouring out 400ml and cooling for 3 mins: ", kettle.getTemperature());
