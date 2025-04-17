class Cooling {
    roomTemperature: number;
    constructor(roomTemperature: number) {
        this.roomTemperature = roomTemperature;
    }

    estimateInitTemp(
        knownJugTemp: number,
        knownTime: number,
        knownCooling: number,
        desiredTime: number,
        desiredCooling: number,
    ): number {
        let knownTempDifference = knownJugTemp - this.roomTemperature;
        let coolingRate = knownCooling / (knownTempDifference * knownTime);
        let requiredTempDiff = desiredCooling / (coolingRate * desiredTime);

        return this.roomTemperature + requiredTempDiff;
    }

}

let c = new Cooling(20)

console.log("It would take", c.estimateInitTemp(80, 30, 1, 60, 1), "degrees for the jug to cool down 1 degree in 60 seconds.");
console.log("It would take", c.estimateInitTemp(40, 100, 1, 100, 3), "degrees for the jug to cool down 3 degrees in 100 seconds.");