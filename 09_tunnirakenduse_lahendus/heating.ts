class Water {
    waterAmount: number;
    heatingPower: number=0;
    temperature: number;
    readonly specialHeatCapacity: number=4200;

    constructor(waterAmount: number, temperature: number) {
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }

    setHeatingPower(newPower: number): void {
        this.heatingPower = newPower;
    }

    getTemperature(): number {
        return this.temperature;
    }

    heatPerSecond(): void {
        let joules=this.temperature;
        let deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount/1000);
        this.temperature += deltaTemperature;
    }
}

let w=new Water(800, 20);
w.setHeatingPower(1500);

for(let i=0; i<120; i++) {
    w.heatPerSecond();
    console.log(w.temperature);
}

console.log(`Final temperature after 120 seconds: ${w.getTemperature()}`);