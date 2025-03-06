class kaalutudKeskmine {
    protected ainepunktid: number[] = [];
    protected hinded: number[] = [];
    protected keskmine: number = 0;

    lisaAine(ainepunkt: number, hinne: number) {
        this.ainepunktid.push(ainepunkt);
        this.hinded.push(hinne);
        this.arvutaKeskmine();
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
}

let hinded = new kaalutudKeskmine();

hinded.lisaAine(3, 5);
hinded.lisaAine(6, 4);
console.log("Kaalutud keskmine kahe ainega: ", hinded.getKeskmine());

hinded.lisaAine(4, 3);
console.log("Kaalutud keskmine kolme ainega: ", hinded.getKeskmine());

hinded.lisaAine(3, 5);
console.log("Kaalutud keskmine nelja ainega: ", hinded.getKeskmine());