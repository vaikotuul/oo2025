let eesnimi:string="Vaiko";
//let eesnimi:string=56;
let vanus:number=18;
console.log("Tere, maailm!");
console.log("Tere, "+eesnimi+"!");
if(vanus<7){
    console.log("Tasuta!");
} else {
    console.log("Osta pilet!");
    // Teata, kas tuleb osta lapsepilet või täispilet
    if(vanus<18){
        console.log("Osta lapsepilet!");
    } else {
        console.log("Osta täispilet!");
    }
}
let symbolid:string[]=[];
for(let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}
console.log(symbolid.join(""));