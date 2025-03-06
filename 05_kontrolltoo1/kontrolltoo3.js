var kaalutudKeskmine = /** @class */ (function () {
    function kaalutudKeskmine(g) {
        this.g = g;
        this.ainepunktid = [];
        this.hinded = [];
        this.keskmine = 0;
        this.height = 300;
        this.width = 700;
    }
    kaalutudKeskmine.prototype.lisaAine = function (ainepunkt, hinne) {
        this.ainepunktid.push(ainepunkt);
        this.hinded.push(hinne);
        this.arvutaKeskmine();
        this.joonistaAined();
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
    kaalutudKeskmine.prototype.joonistaAined = function () {
        this.g.clearRect(0, 0, this.width, this.height);
        this.g.fillStyle = "black";
        this.g.fillText("Kaalutud keskmine: " + this.keskmine.toFixed(2), 10, 20);
        //x ja y koordinaadid millele ained paigutatakse
        var x = 10;
        var alusJoon = this.height - 30;
        for (var i = 0; i < this.ainepunktid.length; i++) {
            var width = this.ainepunktid[i] * 15; //ristküliku laius vastavalt eap-le (15px)
            var height = this.hinded[i] * 30; //ristküliku kõrgus vastavalt hindele (30px)
            this.g.fillRect(x, alusJoon - height, width, height);
            this.g.strokeStyle = "black";
            this.g.strokeRect(x, alusJoon - height, width, height);
            this.g.fillStyle = "black";
            this.g.fillText(this.ainepunktid[i] + "EAP", x + 5, alusJoon - height - 5);
            x += width + 10;
        }
        if (this.keskmine > 0) {
            var keskmineKõrgus = this.keskmine * 30;
            this.g.beginPath();
            this.g.strokeStyle = "red";
            this.g.setLineDash([5, 3]);
            this.g.moveTo(0, alusJoon - keskmineKõrgus);
            this.g.lineTo(this.width, alusJoon - keskmineKõrgus);
            this.g.stroke();
            this.g.fillStyle = "Red";
            this.g.fillText("Keskmine: " + this.keskmine.toFixed(3), 600, alusJoon - keskmineKõrgus - 5);
        }
    };
    return kaalutudKeskmine;
}());
