var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vektor.prototype.liida = function (teine) {
        return new Vektor(this.x + teine.x, this.y + teine.y);
    };
    //Loo käsklus vektori korrutamiseks arvuga
    Vektor.prototype.korruta = function (kordaja) {
        return new Vektor(this.x * kordaja, this.y * kordaja);
    };
    Vektor.prototype.skalaarkorrutis_koord = function (teine) {
        return this.x * teine.x + this.y * teine.y;
    };
    Vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    return Vektor;
}());
console.log("Vektor alguses");
var v1 = new Vektor(3, 5);
v1.kuva();
console.log("Vektori pikkus");
console.log(v1.pikkus());
console.log("Vektor suurendatud x-iga");
v1.suurendaX();
v1.kuva();
console.log("Vektorite liitmine");
var v3 = v1.liida(new Vektor(1, 2));
v3.kuva();
console.log("Vektori korrutamine arvuga");
v1.korruta(2).kuva();
console.log("Skalaarkorrutis");
var v4 = new Vektor(1, 2);
console.log(v1.skalaarkorrutis_koord(v4));
console.log("Vaguni energia kasutus");
var vagun = new Vektor(9, 0);
var energia = v1.skalaarkorrutis_koord(vagun);
console.log(energia);
console.log("Massiivi summa");
var vektorid = [
    new Vektor(1, 2),
    new Vektor(3, 4),
    new Vektor(5, 6),
    new Vektor(7, 8)
];
var asukoht = vektorid[0];
for (var i = 1; i < vektorid.length; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
