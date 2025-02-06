var eesnimi = "Vaiko";
//let eesnimi:string=56;
var vanus = 18;
console.log("Tere, maailm!");
console.log("Tere, " + eesnimi + "!");
if (vanus < 7) {
    console.log("Tasuta!");
}
else {
    console.log("Osta pilet!");
    // Teata, kas tuleb osta lapsepilet või täispilet
    if (vanus < 18) {
        console.log("Osta lapsepilet!");
    }
    else {
        console.log("Osta täispilet!");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
