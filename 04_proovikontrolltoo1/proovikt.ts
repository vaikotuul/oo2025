class Kolmnurk {
    protected xKoord: number[] = [];
    protected yKoord: number[] = [];
    protected width: number;
    protected height: number = 400;
    protected ümbermõõt: number = 0;

    constructor(protected g: CanvasRenderingContext2D, 
                protected startx: number, protected starty: number) {
        this.width = 400;
        this.draw();
    }

    lisaPunkt(x: number, y: number) {
        this.xKoord.push(x);
        this.yKoord.push(y);
        this.kalkÜmbermõõt();
        this.draw();
        this.printKoordinaadid();
    }

    printKoordinaadid() {
        console.log("X Koordinaadid:", this.xKoord);
        console.log("Y Koordinaadid:", this.yKoord);
    }

    kalkÜmbermõõt() {
        this.ümbermõõt = 0;
        if (this.xKoord.length < 2) return;
        
        for (let i = 0; i < this.xKoord.length - 1; i++) {
            const dx = this.xKoord[i + 1] - this.xKoord[i];
            const dy = this.yKoord[i + 1] - this.yKoord[i];
            const küljePikkus = Math.sqrt(dx * dx + dy * dy);
            this.ümbermõõt += küljePikkus;
        }

        const dx = this.xKoord[0] - this.xKoord[this.xKoord.length - 1];
        const dy = this.yKoord[0] - this.yKoord[this.yKoord.length - 1];
        const küljePikkus = Math.sqrt(dx * dx + dy * dy);
        this.ümbermõõt += küljePikkus;

        console.log("Ümbermõõt:", this.ümbermõõt);
    }

    nihuta(dx: number, dy: number) {
        for (let i = 0; i < this.xKoord.length; i++) {
            this.xKoord[i] += dx;
            this.yKoord[i] += dy;
        }
        this.draw();
        this.printKoordinaadid();
    }

    suurenda(faktor: number) {

        let keskX = 0, keskY = 0;
        for (let i = 0; i < this.xKoord.length; i++) {
            keskX += this.xKoord[i];
            keskY += this.yKoord[i];
        }
        keskX /= this.xKoord.length;
        keskY /= this.yKoord.length;


        for (let i = 0; i < this.xKoord.length; i++) {
            this.xKoord[i] = keskX + (this.xKoord[i] - keskX) * faktor;
            this.yKoord[i] = keskY + (this.yKoord[i] - keskY) * faktor;
        }
        
        this.kalkÜmbermõõt();
        this.draw();
        this.printKoordinaadid();
    }

    küljePikkused(): number[] {
        const pikkused: number[] = [];
        if (this.xKoord.length < 2) return pikkused;
        
        for (let i = 0; i < this.xKoord.length - 1; i++) {
            const dx = this.xKoord[i + 1] - this.xKoord[i];
            const dy = this.yKoord[i + 1] - this.yKoord[i];
            const küljePikkus = Math.sqrt(dx * dx + dy * dy);
            pikkused.push(küljePikkus);
        }

        const dx = this.xKoord[0] - this.xKoord[this.xKoord.length - 1];
        const dy = this.yKoord[0] - this.yKoord[this.yKoord.length - 1];
        const küljePikkus = Math.sqrt(dx * dx + dy * dy);
        pikkused.push(küljePikkus);

        console.log("Külje pikkused:", pikkused);
        return pikkused;
    }

    draw() {
        this.g.clearRect(0, 0, this.width, this.height);
        if (this.xKoord.length < 2) return;
        
        this.g.beginPath();
        this.g.moveTo(this.xKoord[0], this.yKoord[0]);
        
        for (let i = 1; i < this.xKoord.length; i++) {
            this.g.lineTo(this.xKoord[i], this.yKoord[i]);
        }
        
        if (this.xKoord.length > 2) {
            this.g.closePath();
        }
        
        this.g.stroke();
        
        for (let i = 0; i < this.xKoord.length; i++) {
            this.g.beginPath();
            this.g.arc(this.xKoord[i], this.yKoord[i], 3, 0, 2 * Math.PI);
            this.g.fill();
            this.g.fillText(`(${this.xKoord[i]}, ${this.yKoord[i]})`, 
                           this.xKoord[i] + 5, this.yKoord[i] - 5);
        }
        
        if (this.ümbermõõt > 0) {
            this.g.fillText(`Ümbermõõt: ${this.ümbermõõt.toFixed(2)}`, 10, 20);
        }
    }
}