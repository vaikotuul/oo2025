import { error } from "console";
import { get } from "http";

class Simulation {
    waterAmount: number;
    heatingPower: number;
    temperature: number;
    roomTemperature: number;
    readonly specialHeatCapacity: number = 4200;
    joulesPerSecKelvin: number;

    constructor(waterAmount: number, temperature: number, heatingPower: number, roomTemperature: number) {
        if(waterAmount > 2000) {
            throw new Error("The max capacity is 2 liters!");
        }
        this.waterAmount = waterAmount;
        this.temperature = temperature;
        this.heatingPower = heatingPower;
        this.roomTemperature = roomTemperature;
        this.joulesPerSecKelvin = 1.0 * 4200 * 2 / (100 * (100-20));
    }

    getTemperature(): number {
        return this.temperature;
    }

    heat(seconds: number): void {
        let joules=this.heatingPower * seconds;
        let deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount/1000);
        this.temperature += deltaTemperature;
    }

    cool(seconds: number): void {
        let joules = (this.temperature - this.roomTemperature) * this.joulesPerSecKelvin;
        let deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature -= deltaTemperature;
    }

    pourOut(amount: number): void {
        if(amount>= this.waterAmount) {
            throw new Error("The jug doesn't have that much water!")
        }
        this.waterAmount -= amount;
    }

    simulateCooling(waterAmount: number, heatingPower: number, roomTemperature: number): number {
        let kettle = new Simulation(waterAmount, 95, heatingPower, roomTemperature);
        let secondsToCool = 0;
        while(kettle.getTemperature()>90) {
            kettle.cool(1);
            secondsToCool++;
        }
        console.log(`Cooling simulation for ${waterAmount} at ${roomTemperature} took ${secondsToCool} to cool.`)
        console.log(`Cooling from 95 to 90 ${secondsToCool}`);
        return secondsToCool
    }
}

let cool = new Simulation(1000, 100, 1500, 20);
cool.cool(100);


for(let i=0; i<9; i++) {
    cool.cool(100);
    console.log(cool.getTemperature());
}

let roomTemperature = 20;
let kettle = new Simulation(1000, 20, 1500, roomTemperature);
let secondsToBoil = 0;
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