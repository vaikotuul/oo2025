// Koosta funktsioon kolme arvu aritmeetilise keskmise leidmiseks. Katseta.
function aritmeetilineKeskmine(a, b, c) {
    return (a + b + c) / 3;
}
console.log(aritmeetilineKeskmine(1, 2, 3));
console.log(aritmeetilineKeskmine(4, 5, 6));
console.log(aritmeetilineKeskmine(7, 8, 9));
// Koosta funktsioon massiivi libiseva keskmise leidmiseks. Väljundiks on massiiv, mis on sisendist kahe elemendi võrra lühem ning mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi ning selle järgmise ja ülejärgmise elemendi keskmine.
function libisevKeskmine(massiiv) {
    var tulem = [];
    for (var i = 0; i < massiiv.length - 2; i++) {
        var keskmine = aritmeetilineKeskmine(massiiv[i], massiiv[i + 1], massiiv[i + 2]);
        tulem.push(keskmine);
    }
    return tulem;
}
console.log(libisevKeskmine([1, 2, 3, 4, 5]));
console.log(libisevKeskmine([10, 20, 30, 40, 50]));
console.log(libisevKeskmine([5, 10, 15, 20, 25]));
//Koosta klass, mille eksemplarile saab vastava käsuga lisada arve. Teise käsuga saab küsida nende arvude libiseva keskmise massiivi vastavalt eelmise punkti juhendile. Koosta kood nõnda, et uue arvu lisamisel eksemplarile tehtaks uusi arvutusi võimalikult vähe (st. ei arvutataks kogu tulemust massiivi algusest uuesti)
var ArvudeKogum = /** @class */ (function () {
    function ArvudeKogum() {
        this.arvud = [];
        this.libisevKeskmineMassiiv = [];
    }
    ArvudeKogum.prototype.lisaArv = function (arv) {
        this.arvud.push(arv);
        if (this.arvud.length >= 3) {
            var n = this.arvud.length;
            var uusKeskmine = aritmeetilineKeskmine(this.arvud[n - 3], this.arvud[n - 2], this.arvud[n - 1]);
            this.libisevKeskmineMassiiv.push(uusKeskmine);
        }
    };
    ArvudeKogum.prototype.saaLibisevKeskmine = function () {
        return this.libisevKeskmineMassiiv;
    };
    return ArvudeKogum;
}());
var kogum = new ArvudeKogum();
kogum.lisaArv(1);
kogum.lisaArv(2);
kogum.lisaArv(3);
console.log(kogum.saaLibisevKeskmine());
kogum.lisaArv(4);
console.log(kogum.saaLibisevKeskmine());
kogum.lisaArv(5);
console.log(kogum.saaLibisevKeskmine());
