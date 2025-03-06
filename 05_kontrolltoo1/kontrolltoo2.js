var kaalutudKeskmine = /** @class */ (function () {
    function kaalutudKeskmine() {
        this.ainepunktid = [];
        this.hinded = [];
        this.keskmine = 0;
    }
    kaalutudKeskmine.prototype.lisaAine = function (ainepunkt, hinne) {
        this.ainepunktid.push(ainepunkt);
        this.hinded.push(hinne);
        this.arvutaKeskmine();
    };
    kaalutudKeskmine.prototype.arvutaKeskmine = function () {
        if (this.ainepunktid.length === 0) {
            this.keskmine = 0;
            return;
        }
        var ainepunktideSumma = 0;
        var kaalutudSumma = 0;
        for (var i = 0; i < this.ainepunktid.length; i++) {
            ainepunktideSumma += this.ainepunktid[i];
            kaalutudSumma += this.ainepunktid[i] * this.hinded[i];
        }
        this.keskmine = kaalutudSumma / ainepunktideSumma;
    };
    kaalutudKeskmine.prototype.getKeskmine = function () {
        return this.keskmine;
    };
    return kaalutudKeskmine;
}());
var hinded = new kaalutudKeskmine();
hinded.lisaAine(3, 5);
hinded.lisaAine(6, 4);
console.log("Kaalutud keskmine kahe ainega: ", hinded.getKeskmine());
hinded.lisaAine(4, 3);
console.log("Kaalutud keskmine kolme ainega: ", hinded.getKeskmine());
hinded.lisaAine(3, 5);
console.log("Kaalutud keskmine nelja ainega: ", hinded.getKeskmine());
