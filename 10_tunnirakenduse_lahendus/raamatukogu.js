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
var _a;
var Isik = /** @class */ (function () {
    function Isik(nimi) {
        this.nimi = nimi;
    }
    return Isik;
}());
var Kasutaja = /** @class */ (function (_super) {
    __extends(Kasutaja, _super);
    function Kasutaja() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.laenutatudRaamatud = [];
        return _this;
    }
    Kasutaja.prototype.tegevus = function () {
        console.log("".concat(this.nimi, " saab raamatuid laenutada ja tagastada."));
    };
    Kasutaja.prototype.laenutaRaamat = function (raamat) {
        if (raamat.saadavus) {
            raamat.laenuta();
            this.laenutatudRaamatud.push(raamat);
            console.log("".concat(this.nimi, " laenutas raamatu: ").concat(raamat.pealkiri));
        }
        else {
            console.log("".concat(raamat.pealkiri, " ei ole saadaval."));
        }
    };
    Kasutaja.prototype.tagastaRaamat = function (raamat) {
        var index = this.laenutatudRaamatud.indexOf(raamat);
        if (index > -1) {
            raamat.tagasta();
            this.laenutatudRaamatud.splice(index, 1);
            console.log("".concat(this.nimi, " tagastas raamatu: ").concat(raamat.pealkiri));
        }
        else {
            console.log("".concat(this.nimi, " ei ole seda raamatut laenutanud."));
        }
    };
    return Kasutaja;
}(Isik));
var Teos = /** @class */ (function () {
    function Teos(pealkiri, autor) {
        this.pealkiri = pealkiri;
        this.autor = autor;
    }
    return Teos;
}());
var Raamat = /** @class */ (function (_super) {
    __extends(Raamat, _super);
    function Raamat(pealkiri, autor, saadavus) {
        if (saadavus === void 0) { saadavus = true; }
        var _this = _super.call(this, pealkiri, autor) || this;
        _this.saadavus = saadavus;
        return _this;
    }
    Raamat.prototype.laenuta = function () {
        this.saadavus = false;
    };
    Raamat.prototype.tagasta = function () {
        this.saadavus = true;
    };
    return Raamat;
}(Teos));
var Raamatukogu = /** @class */ (function () {
    function Raamatukogu() {
        this.raamatud = [];
        this.kasutajad = [];
    }
    Raamatukogu.prototype.lisaRaamat = function (raamat) {
        this.raamatud.push(raamat);
    };
    Raamatukogu.prototype.registreeriKasutaja = function (kasutaja) {
        this.kasutajad.push(kasutaja);
    };
    Raamatukogu.prototype.saadavalRaamatud = function () {
        return this.raamatud.filter(function (raamat) { return raamat.saadavus; });
    };
    Raamatukogu.prototype.renderRaamatud = function () {
        var _this = this;
        var output = document.getElementById("output");
        if (!output)
            return;
        output.innerHTML = "<h2>Saadaval olevad raamatud:</h2>";
        this.raamatud.forEach(function (raamat) {
            var raamatDiv = document.createElement("div");
            raamatDiv.textContent = "".concat(raamat.pealkiri, " - ").concat(raamat.autor, " (").concat(raamat.saadavus ? "Saadaval" : "Laenutatud", ")");
            if (raamat.saadavus) {
                var laenutaButton = document.createElement("button");
                laenutaButton.textContent = "Laenuta";
                laenutaButton.onclick = function () {
                    kasutaja1.laenutaRaamat(raamat);
                    _this.renderRaamatud();
                };
                raamatDiv.appendChild(laenutaButton);
            }
            else {
                var tagastaButton = document.createElement("button");
                tagastaButton.textContent = "Tagasta";
                tagastaButton.onclick = function () {
                    kasutaja1.tagastaRaamat(raamat);
                    _this.renderRaamatud();
                };
                raamatDiv.appendChild(tagastaButton);
            }
            output.appendChild(raamatDiv);
        });
    };
    Raamatukogu.prototype.renderLaenutatudRaamatud = function () {
        var output = document.getElementById("output");
        if (!output)
            return;
        output.innerHTML = "<h2>Laenutatud raamatud:</h2>";
        this.kasutajad.forEach(function (kasutaja) {
            var userDiv = document.createElement("div");
            userDiv.innerHTML = "<strong>".concat(kasutaja.nimi, ":</strong>");
            var borrowedBooks = kasutaja.laenutatudRaamatud;
            if (borrowedBooks.length > 0) {
                borrowedBooks.forEach(function (raamat) {
                    var bookDiv = document.createElement("div");
                    bookDiv.textContent = "".concat(raamat.pealkiri, " - ").concat(raamat.autor);
                    userDiv.appendChild(bookDiv);
                });
            }
            else {
                userDiv.innerHTML += " Ei ole laenutatud raamatuid.";
            }
            output.appendChild(userDiv);
        });
    };
    Raamatukogu.prototype.setupUI = function () {
        var _this = this;
        var addBookButton = document.getElementById("addBook");
        var registerUserButton = document.getElementById("registerUser");
        addBookButton === null || addBookButton === void 0 ? void 0 : addBookButton.addEventListener("click", function () {
            var title = prompt("Sisesta raamatu pealkiri:");
            var author = prompt("Sisesta raamatu autor:");
            if (title && author) {
                var newBook = new Raamat(title, author);
                _this.lisaRaamat(newBook);
                alert("Raamat \"".concat(title, "\" lisatud."));
            }
        });
        registerUserButton === null || registerUserButton === void 0 ? void 0 : registerUserButton.addEventListener("click", function () {
            var name = prompt("Sisesta kasutaja nimi:");
            if (name) {
                var newUser = new Kasutaja(name);
                _this.registreeriKasutaja(newUser);
                alert("Kasutaja \"".concat(name, "\" registreeritud."));
            }
        });
        var showBorrowedBooksButton = document.getElementById("showBorrowedBooks");
        showBorrowedBooksButton === null || showBorrowedBooksButton === void 0 ? void 0 : showBorrowedBooksButton.addEventListener("click", function () {
            _this.renderLaenutatudRaamatud();
        });
    };
    return Raamatukogu;
}());
// Näide kasutusest
var library = new Raamatukogu();
var book1 = new Raamat("The Hunger Games", "Suzanne Collins");
var book2 = new Raamat("Dune", "Frank Herbert");
var book3 = new Raamat("The Lord of the Rings", "J.R.R. Tolkien");
library.lisaRaamat(book1);
library.lisaRaamat(book2);
library.lisaRaamat(book3);
var kasutaja1 = new Kasutaja("Mari");
var kasutaja2 = new Kasutaja("Jaan");
library.registreeriKasutaja(kasutaja1);
library.registreeriKasutaja(kasutaja2);
(_a = document.getElementById("showBooks")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    library.renderRaamatud();
});
library.setupUI();
