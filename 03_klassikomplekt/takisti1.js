var Resistor = /** @class */ (function () {
    function Resistor(r, g) {
        this.r = r;
        this.g = g;
        this.draw();
    }
    Resistor.prototype.draw = function () {
        this.g.beginPath();
        this.g.rect(50, 10, 150, 130);
        this.g.stroke();
        this.g.fillText("" + this.r, 110, 80);
    };
    return Resistor;
}());
