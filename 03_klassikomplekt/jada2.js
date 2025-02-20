var Resistor = /** @class */ (function () {
    function Resistor(r, name) {
        this.r = r;
        this.name = name;
        this.height = 30;
        this.width = 100;
    }
    Resistor.prototype.getResistance = function () { return this.r; };
    Resistor.prototype.draw = function (g, startx, y) {
        g.beginPath();
        g.moveTo(startx, y);
        g.lineTo(startx + this.width / 4, y);
        g.rect(startx + this.width / 4, y - 10, this.width / 2, 20);
        g.fillText(this.name + ": " + this.r + " Ω", startx + this.width / 4 + 1, y + 2);
        g.moveTo(startx + this.width * 3 / 4, y);
        g.lineTo(startx + this.width, y);
        g.stroke();
    };
    Resistor.prototype.getWidth = function () { return this.width; };
    Resistor.prototype.getR = function () { return this.r; };
    return Resistor;
}());
var SeriesCircuit = /** @class */ (function () {
    function SeriesCircuit(g, startx, y) {
        this.g = g;
        this.startx = startx;
        this.y = y;
        this.resistors = [];
        this.width = 10;
    }
    SeriesCircuit.prototype.push = function (r) {
        this.resistors.push(r);
        this.width += r.getWidth();
        this.draw();
    };
    SeriesCircuit.prototype.draw = function () {
        this.g.clearRect(0, this.y - 20, this.width, 40);
        var x = this.startx;
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x += 5;
        this.g.lineTo(x, this.y);
        this.g.stroke();
        var areaStartX = x;
        for (var i = 0; i < this.resistors.length; i++) {
            this.resistors[i].draw(this.g, x, this.y);
            x += this.resistors[i].getWidth();
        }
        this.g.strokeStyle = "lightgray";
        this.g.beginPath();
        this.g.rect(areaStartX, this.y - 20, x - areaStartX, 40);
        this.g.stroke();
        this.g.strokeStyle = "black";
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x += 5;
        this.g.lineTo(x, this.y);
        this.g.stroke();
        this.g.fillText(this.getR() + " Ω", this.startx + this.width / 2 - 10, this.y + 20);
    };
    SeriesCircuit.prototype.getR = function () {
        var result = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var r = _a[_i];
            result += r.getR();
        }
        return result;
    };
    return SeriesCircuit;
}());
