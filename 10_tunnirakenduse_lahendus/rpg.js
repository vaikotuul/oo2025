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
var _a, _b, _c;
// === TÜÜBID JA KLASSID ===
var Character = /** @class */ (function () {
    function Character(name, health, level) {
        if (level === void 0) { level = 1; }
        this.name = name;
        this.health = health;
        this.level = level;
    }
    Character.prototype.takeDamage = function (damage) {
        this.health -= damage;
        return "".concat(this.name, " sai ").concat(damage, " punkti kahju!");
    };
    return Character;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name) {
        var _this = _super.call(this, name, 150) || this;
        _this.stamina = 100;
        return _this;
    }
    Warrior.prototype.attack = function (target) {
        var message = "".concat(this.name, " l\u00F5i m\u00F5\u00F5gaga!");
        target.takeDamage(25);
        this.stamina -= 15;
        return message;
    };
    Warrior.prototype.defend = function () {
        this.stamina += 10;
        return "".concat(this.name, " kaitseb end kilbiga!");
    };
    Warrior.prototype.getStamina = function () {
        return this.stamina;
    };
    return Warrior;
}(Character));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name) {
        var _this = _super.call(this, name, 90) || this;
        _this.mana = 200;
        return _this;
    }
    Mage.prototype.attack = function (target) {
        var message = "".concat(this.name, " viskas tulekera!");
        target.takeDamage(35);
        this.mana -= 25;
        return message;
    };
    Mage.prototype.defend = function () {
        this.mana += 20;
        return "".concat(this.name, " loitsib kaitse!");
    };
    Mage.prototype.castHealingSpell = function () {
        this.health += 40;
        this.mana -= 30;
        return "".concat(this.name, " parandas end!");
    };
    Mage.prototype.getMana = function () {
        return this.mana;
    };
    return Mage;
}(Character));
var Sword = /** @class */ (function () {
    function Sword(name, damage) {
        if (damage === void 0) { damage = 30; }
        this.name = name;
        this.damage = damage;
    }
    Sword.prototype.use = function () {
        return "L\u00F5ikasid m\u00F5\u00F5gaga (".concat(this.damage, " dmg)!");
    };
    return Sword;
}());
var GameManager = /** @class */ (function () {
    function GameManager() {
        this.players = [];
        this.battleLog = [];
    }
    GameManager.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    GameManager.prototype.addLogMessage = function (message) {
        this.battleLog.push(message);
    };
    GameManager.prototype.getLog = function () {
        return this.battleLog;
    };
    return GameManager;
}());
// === MÄNGU SEADISTUS ===
var player = new Warrior("Kangelane");
var enemy = new Mage("Tume võlur");
var game = new GameManager();
game.addPlayer(player);
// === UI HALDUS ===
function updateUI() {
    // Elud
    var healthElement = document.getElementById('health-value');
    if (healthElement) {
        healthElement.textContent = "".concat(player.health, " HP");
        healthElement.parentNode.style.width = "".concat(Math.max(0, player.health), "%");
    }
    // Staatusriba (Stamina/Mana)
    var resourceElement = document.getElementById('mana-value');
    if (resourceElement) {
        if (player instanceof Warrior) {
            resourceElement.textContent = "".concat(player.getStamina(), " Stamina");
            resourceElement.parentNode.style.width = "".concat(player.getStamina(), "%");
        }
        if (player instanceof Mage) {
            resourceElement.textContent = "".concat(player.getMana(), " Mana");
            resourceElement.parentNode.style.width = "".concat(player.getMana(), "%");
        }
    }
    // Battle logi uuendamine
    var logElement = document.getElementById('battle-log');
    if (logElement) {
        logElement.innerHTML = game.getLog()
            .map(function (entry) { return "<div class=\"log-entry\">".concat(entry, "</div>"); })
            .join('');
    }
}
// === NUPU HANDLERID ===
(_a = document.querySelector('.attack-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var attackMessage = player.attack(enemy);
    var damageMessage = enemy.takeDamage(25); // Warrior base damage
    game.addLogMessage(attackMessage);
    game.addLogMessage(damageMessage);
    updateUI();
});
(_b = document.querySelector('.defend-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var defendMessage = player.defend();
    game.addLogMessage(defendMessage);
    updateUI();
});
(_c = document.querySelector('.special-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    if (player instanceof Mage) {
        var healMessage = player.castHealingSpell();
        game.addLogMessage(healMessage);
    }
    updateUI();
});
// === ALGSEISU LOOMINE ===
updateUI();
