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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.introduce = function () {
        console.log("Minu nimi on ".concat(this.name, " ja ma olen ").concat(this.age, " aastat vana."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Auh-Auh!");
    };
    Dog.prototype.move = function () {
        console.log("".concat(this.name, " jookseb kiiresti"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Mjäu!");
    };
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " suudab k\u00F5rgele h\u00FCpata"));
    };
    return Cat;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingSpan) {
        var _this = _super.call(this, name, age) || this;
        _this.wingSpan = wingSpan;
        return _this;
    }
    Bird.prototype.makeSound = function () {
        console.log("Tširp-Tširp!");
    };
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " lendab tiibadega ").concat(this.wingSpan, "cm ulatuses"));
    };
    Bird.prototype.nest = function () {
        console.log("".concat(this.name, " ehitab pesa"));
    };
    return Bird;
}(Animal));
var muri = new Dog("Muri", 5);
muri.introduce();
muri.makeSound();
muri.move();
var miisu = new Cat("Miisu", 3);
miisu.introduce();
miisu.makeSound();
miisu.move();
var tweet = new Bird("Linnuke", 2, 30);
tweet.introduce();
tweet.makeSound();
tweet.move();
tweet.nest();
