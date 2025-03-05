var Kolmnurk = /** @class */ (function () {
    function Kolmnurk(g, startx, starty) {
        this.g = g;
        this.startx = startx;
        this.starty = starty;
        this.xKoord = [];
        this.yKoord = [];
        this.height = 400;
        this.ümbermõõt = 0;
        this.width = 400;
        this.draw();
    }
    Kolmnurk.prototype.lisaPunkt = function (x, y) {
        this.xKoord.push(x);
        this.yKoord.push(y);
        this.kalkÜmbermõõt();
        this.draw();
        this.printKoordinaadid();
    };
    Kolmnurk.prototype.printKoordinaadid = function () {
        console.log("X Koordinaadid:", this.xKoord);
        console.log("Y Koordinaadid:", this.yKoord);
    };
    Kolmnurk.prototype.kalkÜmbermõõt = function () {
        this.ümbermõõt = 0;
        if (this.xKoord.length < 2)
            return;
        for (var i = 0; i < this.xKoord.length - 1; i++) {
            var dx_1 = this.xKoord[i + 1] - this.xKoord[i];
            var dy_1 = this.yKoord[i + 1] - this.yKoord[i];
            var küljePikkus_1 = Math.sqrt(dx_1 * dx_1 + dy_1 * dy_1);
            this.ümbermõõt += küljePikkus_1;
        }
        var dx = this.xKoord[0] - this.xKoord[this.xKoord.length - 1];
        var dy = this.yKoord[0] - this.yKoord[this.yKoord.length - 1];
        var küljePikkus = Math.sqrt(dx * dx + dy * dy);
        this.ümbermõõt += küljePikkus;
        console.log("Ümbermõõt:", this.ümbermõõt);
    };
    Kolmnurk.prototype.nihuta = function (dx, dy) {
        for (var i = 0; i < this.xKoord.length; i++) {
            this.xKoord[i] += dx;
            this.yKoord[i] += dy;
        }
        this.draw();
        this.printKoordinaadid();
    };
    Kolmnurk.prototype.suurenda = function (faktor) {
        var keskX = 0, keskY = 0;
        for (var i = 0; i < this.xKoord.length; i++) {
            keskX += this.xKoord[i];
            keskY += this.yKoord[i];
        }
        keskX /= this.xKoord.length;
        keskY /= this.yKoord.length;
        for (var i = 0; i < this.xKoord.length; i++) {
            this.xKoord[i] = keskX + (this.xKoord[i] - keskX) * faktor;
            this.yKoord[i] = keskY + (this.yKoord[i] - keskY) * faktor;
        }
        this.kalkÜmbermõõt();
        this.draw();
        this.printKoordinaadid();
    };
    Kolmnurk.prototype.küljePikkused = function () {
        var pikkused = [];
        if (this.xKoord.length < 2)
            return pikkused;
        for (var i = 0; i < this.xKoord.length - 1; i++) {
            var dx_2 = this.xKoord[i + 1] - this.xKoord[i];
            var dy_2 = this.yKoord[i + 1] - this.yKoord[i];
            var küljePikkus_2 = Math.sqrt(dx_2 * dx_2 + dy_2 * dy_2);
            pikkused.push(küljePikkus_2);
        }
        var dx = this.xKoord[0] - this.xKoord[this.xKoord.length - 1];
        var dy = this.yKoord[0] - this.yKoord[this.yKoord.length - 1];
        var küljePikkus = Math.sqrt(dx * dx + dy * dy);
        pikkused.push(küljePikkus);
        console.log("Külje pikkused:", pikkused);
        return pikkused;
    };
    Kolmnurk.prototype.draw = function () {
        this.g.clearRect(0, 0, this.width, this.height);
        if (this.xKoord.length < 2)
            return;
        this.g.beginPath();
        this.g.moveTo(this.xKoord[0], this.yKoord[0]);
        for (var i = 1; i < this.xKoord.length; i++) {
            this.g.lineTo(this.xKoord[i], this.yKoord[i]);
        }
        if (this.xKoord.length > 2) {
            this.g.closePath();
        }
        this.g.stroke();
        for (var i = 0; i < this.xKoord.length; i++) {
            this.g.beginPath();
            this.g.arc(this.xKoord[i], this.yKoord[i], 3, 0, 2 * Math.PI);
            this.g.fill();
            this.g.fillText("(".concat(this.xKoord[i], ", ").concat(this.yKoord[i], ")"), this.xKoord[i] + 5, this.yKoord[i] - 5);
        }
        if (this.ümbermõõt > 0) {
            this.g.fillText("\u00DCmberm\u00F5\u00F5t: ".concat(this.ümbermõõt.toFixed(2)), 10, 20);
        }
    };
    return Kolmnurk;
}());
