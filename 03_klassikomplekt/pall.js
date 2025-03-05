var Pall = /** @class */ (function () {
    function Pall(g, startx, starty) {
        this.g = g;
        this.startx = startx;
        this.starty = starty;
        this.kõrgus = 400;
        this.kiirusY = 0;
        this.raadius = 20;
        this.gravitatsioon = 0.5; // kui kiiresti pall allapoole kiirendab 
        this.põrge = 0.7; // kui palju energiat pall põrkamisel kaotab
        this.x = startx;
        this.y = starty;
        this.laius = 400;
        this.joonista();
    }
    Pall.prototype.joonista = function () {
        this.g.clearRect(0, 0, this.laius, this.kõrgus);
        this.g.beginPath();
        this.g.arc(this.x, this.y, this.raadius, 0, Math.PI * 2);
        this.g.fillStyle = 'blue';
        this.g.fill();
        this.g.stroke();
    };
    Pall.prototype.liigu = function () {
        this.kiirusY += this.gravitatsioon;
        this.y += this.kiirusY;
        if (this.y + this.raadius > this.kõrgus) {
            this.y = this.kõrgus - this.raadius;
            this.kiirusY *= -this.põrge;
        }
        this.joonista();
    };
    Pall.prototype.hüppa = function () {
        this.kiirusY = -10;
    };
    Pall.prototype.getX = function () {
        return this.x;
    };
    Pall.prototype.getY = function () {
        return this.y;
    };
    Pall.prototype.getRaadius = function () {
        return this.raadius;
    };
    return Pall;
}());
