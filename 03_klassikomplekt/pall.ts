class Pall {
    protected laius: number;
    protected kõrgus: number = 400;
    protected x: number;
    protected y: number;
    protected kiirusY: number = 0;
    protected raadius: number = 20;
    protected gravitatsioon: number = 0.5; // kui kiiresti pall allapoole kiirendab 
    protected põrge: number = 0.7; // kui palju energiat pall põrkamisel kaotab
    
    constructor(protected g, protected startx: number, protected starty: number) {
        this.x = startx;
        this.y = starty;
        this.laius = 400;
        this.joonista();
    }
    
    joonista() {
        this.g.clearRect(0, 0, this.laius, this.kõrgus);
        this.g.beginPath();
        this.g.arc(this.x, this.y, this.raadius, 0, Math.PI * 2);
        this.g.fillStyle = 'blue';
        this.g.fill();
        this.g.stroke();
    }
    
    liigu() {
        this.kiirusY += this.gravitatsioon; //suurendab palli allapoole liikumise kiirust
        this.y += this.kiirusY; // palli vertikaalne asend muutub vastavalt kiirusele
        
        if (this.y + this.raadius > this.kõrgus) {
            this.y = this.kõrgus - this.raadius;
            this.kiirusY *= -this.põrge;
        }
        
        this.joonista();
    }
    
    hüppa() {
        this.kiirusY = -10;
    }
    
    getX(): number {
        return this.x;
    }
    
    getY(): number {
        return this.y;
    }
    
    getRaadius(): number {
        return this.raadius;
    }
}