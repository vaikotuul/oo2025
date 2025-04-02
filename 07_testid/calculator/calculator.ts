class Calculator {
    protected panelContents: string = "";
    protected memoryContents: number = 0;
    protected markContents: string = "";
    protected markPressed: boolean = false;
    protected marks: string[] = ["+", "-", "X", "/"];
    protected constants: { [key: string]: number } = { "pi": Math.PI, "e": Math.E };

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "";
        } else if (b === "←") {
            if (!this.markPressed && this.panelContents.length > 0) {
                this.panelContents = this.panelContents.slice(0, -1);
            }
        } else if (this.constants[b] !== undefined) {
            this.panelContents = this.constants[b].toString();
        } else if (this.marks.includes(b)) {
            this.memoryContents = parseFloat(this.panelContents);
            this.markContents = b;
            this.markPressed = true;
        } else if (b === "=") {
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
        } else {
            if (this.markPressed) {
                this.panelContents = "";
                this.markPressed = false;
            }
            this.panelContents += b;
        }
    }

    getPanelContents(): string {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    }
}

export {
    Calculator
}