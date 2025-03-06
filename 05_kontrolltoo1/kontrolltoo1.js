function KKH(ainepunkt1, hinne1, ainepunkt2, hinne2) {
    var ainepunktid = ainepunkt1 + ainepunkt2;
    var keskmineSumma = (ainepunkt1 * hinne1) + (ainepunkt2 * hinne2);
    return keskmineSumma / ainepunktid;
}
var ainepunkt1 = 3;
var hinne1 = 5;
var ainepunkt2 = 6;
var hinne2 = 4;
var KH = KKH(ainepunkt1, hinne1, ainepunkt2, hinne2);
console.log("Kaalutud keskmine hinne on: " + KH);
