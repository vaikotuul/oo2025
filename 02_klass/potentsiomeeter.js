var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = 0;
    }
    Potentsiomeeter.prototype.muudaNurk = function (delta) {
        var uusNurk = this.nurk + delta;
        if (uusNurk < this.nurkMin) {
            throw new Error("Nurk on liiga väike");
        }
        if (uusNurk > this.nurkMax) {
            throw new Error("Nurk on liiga suur");
        }
        this.nurk = uusNurk;
    };
    Potentsiomeeter.prototype.getR = function () {
        var koht = (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
        return this.rMin + koht * (this.rMax - this.rMin);
    };
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(-200);
console.log(p1);
console.log("Hetke takistus:", p1.getR(), "oomi.");
