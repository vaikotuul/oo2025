interface infoRaamat {
    pealkiri: string;
    autor: string;
    saadavus: boolean;
    laenuta(): void;
    tagasta(): void;
}

class raamat implements infoRaamat{
    constructor(
        public pealkiri: string, 
        public autor: string, 
        public saadavus: boolean = true
    ) {}

    laenuta(): void {
        if (this.saadavus) {
            this.saadavus = false;
            console.log(this.pealkiri, "on laenutatud.");
        } else {
            console.log(this.pealkiri, "ei ole saadaval.");
        }
    }

    tagasta(): void {
        this.saadavus = true;
        console.log(this.pealkiri, "on tagastatud.");
    }
}

class Raamatukogu {
    private raamatud: raamat[] = [];

    lisaRaamat(raamat: raamat): void {
        this.raamatud.push(raamat);
    }

    saadavalRaamatud(): void {
        console.log("Saadaval olevad raamatud:");
        this.raamatud.forEach(raamat => {
            if (raamat.saadavus) {
                console.log(raamat.pealkiri, raamat.autor);
            }
        });
    }
}

const raamatukogu = new Raamatukogu();
const raamat1 = new raamat("- The Hunger Games,", "Suzanne Collins");
const raamat2 = new raamat("- Dune,","Frank Herbert");
const raamat3 = new raamat("- The Lord of the Rings,", "J.R.R. Tolkien");

raamatukogu.lisaRaamat(raamat1);
raamatukogu.lisaRaamat(raamat2);
raamatukogu.lisaRaamat(raamat3);

raamatukogu.saadavalRaamatud();
console.log("-----");
raamat1.laenuta();
console.log("-----");
raamat2.laenuta();
console.log("-----");
raamatukogu.saadavalRaamatud();
console.log("-----");
raamat2.laenuta();
console.log("-----");
raamatukogu.saadavalRaamatud();
console.log("-----");
raamat2.tagasta();
console.log("-----");
raamatukogu.saadavalRaamatud();
