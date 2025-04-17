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
var LogisticsUnit = /** @class */ (function () {
    function LogisticsUnit() {
    }
    return LogisticsUnit;
}());
var Cargo = /** @class */ (function (_super) {
    __extends(Cargo, _super);
    function Cargo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cargo.prototype.getInfo = function () {
        return "Amount: ".concat(this.amount).concat(this.unit);
    };
    return Cargo;
}(LogisticsUnit));
var Liquid = /** @class */ (function (_super) {
    __extends(Liquid, _super);
    function Liquid(amount) {
        var _this = _super.call(this) || this;
        _this.unit = "l";
        _this.amount = amount;
        return _this;
    }
    return Liquid;
}(Cargo));
var Solid = /** @class */ (function (_super) {
    __extends(Solid, _super);
    function Solid(amount) {
        var _this = _super.call(this) || this;
        _this.unit = "kg";
        _this.amount = amount;
        return _this;
    }
    return Solid;
}(Cargo));
var bensiin = new Liquid(300);
var küttepuud = new Solid(20000);
console.log(bensiin.getInfo());
console.log(küttepuud.getInfo());
