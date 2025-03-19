var raamat = /** @class */ (function () {
    function raamat(pealkiri, autor, saadavus) {
        if (saadavus === void 0) { saadavus = true; }
        this.pealkiri = pealkiri;
        this.autor = autor;
        this.saadavus = saadavus;
    }
    raamat.prototype.laenuta = function () {
        if (this.saadavus) {
            this.saadavus = false;
            console.log(this.pealkiri, "on laenutatud.");
        }
        else {
            console.log(this.pealkiri, "ei ole saadaval.");
        }
    };
    raamat.prototype.tagasta = function () {
        this.saadavus = true;
        console.log(this.pealkiri, "on tagastatud.");
    };
    return raamat;
}());
var Raamatukogu = /** @class */ (function () {
    function Raamatukogu() {
        this.raamatud = [];
    }
    Raamatukogu.prototype.lisaRaamat = function (raamat) {
        this.raamatud.push(raamat);
    };
    Raamatukogu.prototype.saadavalRaamatud = function () {
        console.log("Saadaval olevad raamatud:");
        this.raamatud.forEach(function (raamat) {
            if (raamat.saadavus) {
                console.log(raamat.pealkiri, raamat.autor);
            }
        });
    };
    return Raamatukogu;
}());
var raamatukogu = new Raamatukogu();
var raamat1 = new raamat("- The Hunger Games,", "Suzanne Collins");
var raamat2 = new raamat("- Dune,", "Frank Herbert");
var raamat3 = new raamat("- The Lord of the Rings,", "J.R.R. Tolkien");
raamatukogu.lisaRaamat(raamat1);
raamatukogu.lisaRaamat(raamat2);
raamatukogu.lisaRaamat(raamat3);
raamatukogu.saadavalRaamatud();
console.log("-----");
raamat1.laenuta();
console.log("-----");
raamat2.laenuta();
console.log("-----");
raamatukogu.saadavalRaamatud();
console.log("-----");
raamat2.laenuta();
console.log("-----");
raamatukogu.saadavalRaamatud();
console.log("-----");
raamat2.tagasta();
console.log("-----");
raamatukogu.saadavalRaamatud();
