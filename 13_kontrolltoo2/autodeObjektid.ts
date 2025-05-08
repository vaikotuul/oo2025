interface Liikuja {
    edasi(maa: number): void;
    tagasi(maa: number): void;
}

class Auto {
    constructor(
        public pikkus: number, //meetrites
        public mass: number, //kilogrammides
        public mark: string
    ){}
}

class LiikuvAuto extends Auto implements Liikuja {
    public asukoht: number = 0; // meetrites

    constructor(pikkus: number, mass: number, mark: string) {
        super(pikkus, mass, mark)
    }

    edasi(maa: number): void {
        this.asukoht += maa;
    }

    tagasi(maa: number): void {
        this.asukoht -= maa;
    }
}

class Veoauto extends LiikuvAuto {
    private paevik: { aeg: Date, maa: number }[] = [];

    edasi(maa: number, aeg: Date = new Date()): void {
        super.edasi(maa);
        this.paevik.push({ aeg, maa });
    }

    tagasi(maa: number, aeg: Date = new Date()): void {
        super.tagasi(maa);
        this.paevik.push({ aeg, maa });
    }

    soidudVahemikus(algus: Date, lopp: Date) {
        return this.paevik.filter(log =>
            log.aeg >= algus && log.aeg <= lopp);
    }

    teepikkusVahemikus(algus: Date, lopp: Date) {
        return this.soidudVahemikus(algus, lopp)
            .reduce((sum, log) => sum + log.maa, 0);
    }
}

class Soiduauto extends LiikuvAuto{
    constructor(pikkus: number, mass: number, mark: string){
        super(pikkus, mass, mark)
        if (mass > 3500) {
            throw new Error("Sõiduauto mass ei tohi ületada 3.5 tonni!")
        }
    }
}

function kuvaAsukoht(asukoht: number, mark: string): void {
    console.log("Auto asukoht: Algpunkt" + "-".repeat(asukoht) + mark)
}

const veoauto = new Veoauto(6.1, 8916, "DAF XF 460");

const aeg0 = new Date(Date.now() - (1000 * 60 * 60 * 24));
const aeg1 = new Date(Date.now() - (1000 * 60 * 5));
const aeg2 = new Date(Date.now() - (1000 * 60 * 60));
const aeg3 = new Date(Date.now() - (1000 * 60));

veoauto.edasi(1000, aeg0);
veoauto.edasi(50, aeg2);
veoauto.edasi(100, aeg1);
veoauto.tagasi(30, aeg3);

const algus = new Date(Date.now() - (1000 * 60 * 60 * 24))
const lopp = new Date();

console.log("Veoauto sõidud viimase tunni jooksul:", veoauto.soidudVahemikus(algus, lopp));
console.log("Veoauto läbitud teepikkus viimase tunni jooksul:", veoauto.teepikkusVahemikus(algus, lopp), "meetrit");


kuvaAsukoht(veoauto.asukoht, veoauto.mark);

const soiduauto = new Soiduauto(4.6, 2695, "BMW X5")

console.log("Algne asukoht (sõiduauto): " + soiduauto.asukoht);

soiduauto.edasi(100);

kuvaAsukoht(soiduauto.asukoht, soiduauto.mark);

const soiduauto2 = new Soiduauto(5.9, 3501, "Mercedes-Benz Sprinter")
console.log("Algne asukoht (sõiduauto 2): " + soiduauto2.asukoht);
soiduauto2.edasi(20);
kuvaAsukoht(soiduauto2.asukoht, soiduauto2.mark);




//console.log("Algne asukoht: " + liikuvAuto.asukoht);

//liikuvAuto.edasi(100);
//console.log("Auto liikus edasi. Nüüd on auto alguspunktist " + liikuvAuto.asukoht + " meetri kaugusel");

//liikuvAuto.tagasi(70);
//console.log("Auto liikus tagasi. Nüüd on auto alguspunktist " + liikuvAuto.asukoht + " meetri kaugusel");

//liikuvAuto.edasi(30);
//liikuvAuto.tagasi(10);
//liikuvAuto.edasi(20);
//liikuvAuto.tagasi(50);


//const autod: Auto[] = [
//    new Auto(4.4, 1815, "Toyota Supra"),
//    new Auto(4.7, 2060, "Tesla Model 3"),
//    new Auto(4.6, 2695, "BMW X5")
//]

//console.log(autod);