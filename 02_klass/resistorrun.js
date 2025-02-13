var Resistor = /** @class */ (function () {
    function Resistor(r, maxPower) {
        this.r = 0;
        this.maxPower = 0;
        this.r = r;
        this.maxPower = maxPower;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    Resistor.prototype.isVoltageAllowed = function (u) {
        return this.getPower(u) <= this.maxPower;
    };
    return Resistor;
}());
var r1 = new Resistor(110, 0.25);
var r2 = new Resistor(220, 0.5);
var r3 = new Resistor(4700, 1.0);
console.log(r1.getPower(10));
console.log(r2.isVoltageAllowed(12));
var rs = [r1, r2, r3];
var v1 = [];
for (var _i = 0, rs_1 = rs; _i < rs_1.length; _i++) {
    var r = rs_1[_i];
    if (r.isVoltageAllowed(10)) {
        v1.push(r);
    }
}
console.log(v1);
//  let r1: Resistor = new Resistor(110);
//  console.log(r1.getCurrent(5));
//  let r2: Resistor = new Resistor(220);
//  console.log(r2.getCurrent(5));
//  let r3: Resistor = new Resistor(4700);
//  console.log(r3.getCurrent(5));
//
// let takistid:Resistor[] = [r1, r2, r3];
//  console.log(takistid);
//
//  let voolusumma=0;
//  for(let takisti of takistid){
//    voolusumma+=takisti.getCurrent(5);
//  }
//  console.log(voolusumma);
//
//  console.log(takistid.reduce((siiani, praegune) => siiani + praegune.getCurrent(5), 0));
