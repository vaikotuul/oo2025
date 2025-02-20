//npm install typescript
//npx tsc jada1.ts
var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = r;
        this.height = 30;
        this.width = 60;
    }
    Resistor.prototype.getResistance = function () { return this.r; };
    Resistor.prototype.draw = function (g, startx, y) {
        g.clearRect(startx, y - this.height / 2, this.width, this.height);
        g.beginPath();
        g.moveTo(startx, y);
        g.lineTo(startx + this.width / 4, y);
        g.rect(startx + this.width / 4, y - 10, this.width / 2, 20);
        g.fillText(this.r + " Ω", startx + this.width / 4 + 1, y + 2);
        g.moveTo(startx + this.width * 3 / 4, y);
        g.lineTo(startx + this.width, y);
        g.stroke();
    };
    Resistor.prototype.getWidth = function () { return this.width; };
    return Resistor;
}());
var SeriesCircuit = /** @class */ (function () {
    function SeriesCircuit(g, startx, y) {
        this.g = g;
        this.startx = startx;
        this.y = y;
        this.resistors = [];
        this.width = 0;
    }
    SeriesCircuit.prototype.push = function (r) {
        this.resistors.push(r);
        this.width += r.getWidth();
        this.draw();
    };
    SeriesCircuit.prototype.draw = function () {
        if (this.resistors.length == 0) {
            return;
        }
        var x = this.startx;
        for (var i = 0; i < this.resistors.length; i++) {
            this.resistors[i].draw(this.g, x, this.y);
            x += this.resistors[i].getWidth();
        }
    };
    return SeriesCircuit;
}());
