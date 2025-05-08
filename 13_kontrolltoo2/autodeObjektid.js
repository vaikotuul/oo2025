var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(pikkus, //meetrites
    mass, //kilogrammides
    mark) {
        this.pikkus = pikkus;
        this.mass = mass;
        this.mark = mark;
    }
    return Auto;
}());
var LiikuvAuto = /** @class */ (function (_super) {
    __extends(LiikuvAuto, _super);
    function LiikuvAuto(pikkus, mass, mark) {
        var _this = _super.call(this, pikkus, mass, mark) || this;
        _this.asukoht = 0; // meetrites
        return _this;
    }
    LiikuvAuto.prototype.edasi = function (maa) {
        this.asukoht += maa;
    };
    LiikuvAuto.prototype.tagasi = function (maa) {
        this.asukoht -= maa;
    };
    return LiikuvAuto;
}(Auto));
var Veoauto = /** @class */ (function (_super) {
    __extends(Veoauto, _super);
    function Veoauto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paevik = [];
        return _this;
    }
    Veoauto.prototype.edasi = function (maa, aeg) {
        if (aeg === void 0) { aeg = new Date(); }
        _super.prototype.edasi.call(this, maa);
        this.paevik.push({ aeg: aeg, maa: maa });
    };
    Veoauto.prototype.tagasi = function (maa, aeg) {
        if (aeg === void 0) { aeg = new Date(); }
        _super.prototype.tagasi.call(this, maa);
        this.paevik.push({ aeg: aeg, maa: maa });
    };
    Veoauto.prototype.soidudVahemikus = function (algus, lopp) {
        return this.paevik.filter(function (log) {
            return log.aeg >= algus && log.aeg <= lopp;
        });
    };
    Veoauto.prototype.teepikkusVahemikus = function (algus, lopp) {
        return this.soidudVahemikus(algus, lopp)
            .reduce(function (sum, log) { return sum + log.maa; }, 0);
    };
    return Veoauto;
}(LiikuvAuto));
var Soiduauto = /** @class */ (function (_super) {
    __extends(Soiduauto, _super);
    function Soiduauto(pikkus, mass, mark) {
        var _this = _super.call(this, pikkus, mass, mark) || this;
        if (mass > 3500) {
            throw new Error("Sõiduauto mass ei tohi ületada 3.5 tonni!");
        }
        return _this;
    }
    return Soiduauto;
}(LiikuvAuto));
function kuvaAsukoht(asukoht, mark) {
    console.log("Auto asukoht: Algpunkt" + "-".repeat(asukoht) + mark);
}
var veoauto = new Veoauto(6.1, 8916, "DAF XF 460");
var aeg0 = new Date(Date.now() - (1000 * 60 * 60 * 24));
var aeg1 = new Date(Date.now() - (1000 * 60 * 5));
var aeg2 = new Date(Date.now() - (1000 * 60 * 60));
var aeg3 = new Date(Date.now() - (1000 * 60));
veoauto.edasi(1000, aeg0);
veoauto.edasi(50, aeg2);
veoauto.edasi(100, aeg1);
veoauto.tagasi(30, aeg3);
var algus = new Date(Date.now() - (1000 * 60 * 60 * 24));
var lopp = new Date();
console.log("Veoauto sõidud viimase tunni jooksul:", veoauto.soidudVahemikus(algus, lopp));
console.log("Veoauto läbitud teepikkus viimase tunni jooksul:", veoauto.teepikkusVahemikus(algus, lopp), "meetrit");
kuvaAsukoht(veoauto.asukoht, veoauto.mark);
var soiduauto = new Soiduauto(4.6, 2695, "BMW X5");
console.log("Algne asukoht (sõiduauto): " + soiduauto.asukoht);
soiduauto.edasi(100);
kuvaAsukoht(soiduauto.asukoht, soiduauto.mark);
var soiduauto2 = new Soiduauto(5.9, 3501, "Mercedes-Benz Sprinter");
console.log("Algne asukoht (sõiduauto 2): " + soiduauto2.asukoht);
soiduauto2.edasi(20);
kuvaAsukoht(soiduauto2.asukoht, soiduauto2.mark);
//console.log("Algne asukoht: " + liikuvAuto.asukoht);
//liikuvAuto.edasi(100);
//console.log("Auto liikus edasi. Nüüd on auto alguspunktist " + liikuvAuto.asukoht + " meetri kaugusel");
//liikuvAuto.tagasi(70);
//console.log("Auto liikus tagasi. Nüüd on auto alguspunktist " + liikuvAuto.asukoht + " meetri kaugusel");
//liikuvAuto.edasi(30);
//liikuvAuto.tagasi(10);
//liikuvAuto.edasi(20);
//liikuvAuto.tagasi(50);
//const autod: Auto[] = [
//    new Auto(4.4, 1815, "Toyota Supra"),
//    new Auto(4.7, 2060, "Tesla Model 3"),
//    new Auto(4.6, 2695, "BMW X5")
//]
//console.log(autod);
