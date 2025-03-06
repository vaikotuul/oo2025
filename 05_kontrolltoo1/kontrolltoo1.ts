function KKH (ainepunkt1: number, hinne1: number, ainepunkt2: number, hinne2: number): number{
    const ainepunktid = ainepunkt1 + ainepunkt2;
    const keskmineSumma = (ainepunkt1 * hinne1) + (ainepunkt2 * hinne2);
    return keskmineSumma / ainepunktid;
}

const ainepunkt1 = 3;
const hinne1 = 5;
const ainepunkt2 = 6;
const hinne2 = 4;

const KH = KKH(ainepunkt1, hinne1, ainepunkt2, hinne2);
console.log("Kaalutud keskmine hinne on: " + KH)