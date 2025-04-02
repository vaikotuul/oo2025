"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.panelContents = "";
        this.memoryContents = 0;
        this.markContents = "";
        this.markPressed = false;
        this.marks = ["+", "-", "X", "/"];
        this.constants = { "pi": Math.PI, "e": Math.E };
    }
    Calculator.prototype.pressButton = function (b) {
        if (b === "C") {
            this.panelContents = "";
        }
        else if (b === "←") {
            if (!this.markPressed && this.panelContents.length > 0) {
                this.panelContents = this.panelContents.slice(0, -1);
            }
        }
        else if (this.constants[b] !== undefined) {
            this.panelContents = this.constants[b].toString();
        }
        else if (this.marks.includes(b)) {
            this.memoryContents = parseFloat(this.panelContents);
            this.markContents = b;
            this.markPressed = true;
        }
        else if (b === "=") {
            this.markPressed = true;
            if (this.markContents.length === 1) {
                if (this.markContents === "+") {
                    this.panelContents = (this.memoryContents + parseFloat(this.panelContents)).toString();
                }
                if (this.markContents === "-") {
                    this.panelContents = (this.memoryContents - parseFloat(this.panelContents)).toString();
                }
                if (this.markContents === "X") {
                    this.panelContents = (this.memoryContents * parseFloat(this.panelContents)).toString();
                }
                if (this.markContents === "/") {
                    this.panelContents = (this.memoryContents / parseFloat(this.panelContents)).toString();
                }
            }
        }
        else {
            if (this.markPressed) {
                this.panelContents = "";
                this.markPressed = false;
            }
            this.panelContents += b;
        }
    };
    Calculator.prototype.getPanelContents = function () {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    };
    return Calculator;
}());
exports.Calculator = Calculator;
