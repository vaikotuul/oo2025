var Resistor = /** @class */ (function () {
    function Resistor(r, g, startx, endx, y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Resistor.prototype.draw = function () {
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx + this.width / 4, this.y);
        this.g.rect(this.startx + this.width / 4, this.y - this.height / 2, this.width / 2, this.height);
        this.g.moveTo(this.startx + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r + " Ω", this.startx + this.width / 3, this.y + 3);
    };
    Resistor.prototype.setR = function (r) {
        this.r = r;
        this.draw();
    };
    Resistor.prototype.getR = function () {
        return this.r;
    };
    return Resistor;
}());
