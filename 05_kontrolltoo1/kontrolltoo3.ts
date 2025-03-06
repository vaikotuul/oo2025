class kaalutudKeskmine {
    protected ainepunktid: number[] = [];
    protected hinded: number[] = [];
    protected keskmine: number = 0;
    protected height: number = 300;
    protected width: number = 700;

    constructor(protected g){}

    lisaAine(ainepunkt: number, hinne: number) {
        this.ainepunktid.push(ainepunkt);
        this.hinded.push(hinne);
        this.arvutaKeskmine();
        this.joonistaAined();
    }

    arvutaKeskmine() {
        if (this.ainepunktid.length === 0) {
            this.keskmine = 0;
            return;
        }

        let ainepunktideSumma = 0;
        let kaalutudSumma = 0;

        for (let i = 0; i < this.ainepunktid.length; i++) {
            ainepunktideSumma += this.ainepunktid[i];
            kaalutudSumma += this.ainepunktid[i] * this.hinded[i];
        }

        this.keskmine = kaalutudSumma / ainepunktideSumma;
    }

    getKeskmine(): number {
        return this.keskmine;
    }

    joonistaAined(){
        this.g.clearRect(0, 0, this.width, this.height);

        this.g.fillStyle = "black";
        this.g.fillText("Kaalutud keskmine: " + this.keskmine.toFixed(2), 10, 20);
        
        //x ja y koordinaadid millele ained paigutatakse
        let x = 10; 
        const alusJoon = this.height - 30; 

        for (let i = 0; i < this.ainepunktid.length; i++) {
            const width = this.ainepunktid[i] * 15; //ristküliku laius vastavalt eap-le (15px)
            const height = this.hinded[i] * 30; //ristküliku kõrgus vastavalt hindele (30px)
            
            this.g.fillRect(x, alusJoon - height, width, height);
            this.g.strokeStyle = "black";
            this.g.strokeRect(x, alusJoon - height, width, height);

            this.g.fillStyle = "black";
            this.g.fillText(this.ainepunktid[i] + "EAP", x + 5, alusJoon - height - 5);

            x += width + 10;

        }

        if (this.keskmine > 0) {
            const keskmineKõrgus = this.keskmine * 30;
            this.g.beginPath();
            this.g.strokeStyle = "red";
            this.g.setLineDash([5, 3]);
            this.g.moveTo(0, alusJoon - keskmineKõrgus);
            this.g.lineTo(this.width, alusJoon - keskmineKõrgus);
            this.g.stroke();

            this.g.fillStyle = "Red";
            this.g.fillText("Keskmine: " + this.keskmine.toFixed(3), 600, alusJoon - keskmineKõrgus - 5);

        }
    }
}
