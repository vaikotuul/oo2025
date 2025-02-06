function kehamassiindeks(kg:number, cm:number):number{
    let m:number = cm / 100;
    return kg / (m*m);
}
console.log("VALEM 1");
console.log(kehamassiindeks(80, 190));
//console.log(kehamassiindeks("Mati", 190));

console.log("Massid sama pikkusega (Valem 1)");
let massid:number[] = [80, 72, 90, 100, 95];
for(let mass of massid){
    console.log("KMI: "+kehamassiindeks(mass, 190));
}

console.log("Massid sama pikkusega masiivis (Valem 1)");
let indeksid:number[]=massid.map(mass => kehamassiindeks(mass, 190));
console.log(indeksid);

//Loo teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal / pikkus meetrites astmes 2,5
//aitab käsklus Math.pow

function kehamassiindeks2(kg:number, cm:number):number{
    let m:number = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
console.log("VALEM 2");
console.log(kehamassiindeks2(80, 190));

//arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
console.log("Massid sama pikkusega (Valem 2)");
let massid2:number[] = [85, 90, 92, 95, 103];
for(let mass of massid2){
    console.log("KMI2: "+kehamassiindeks2(mass, 190));
}
//näidakse, kuidas väärtused erinevad
console.log("Massid sama pikkusega masiivis (Valem 2)");
let indeksid2:number[]=massid2.map(mass => kehamassiindeks2(mass, 190));
console.log(indeksid2);

// arvutage mõlema valemiga sama massi ja eri pikkuste juures
//console.log("Võrdlus eri pikkuste juures mõlema valemiga");
//let pikkused:number[] = [180, 185, 190, 195, 200];
//for(let pikkus of pikkused){
//    console.log("KMI1: "+kehamassiindeks(90, pikkus));
//    console.log("KMI2: "+kehamassiindeks2(90, pikkus));
//}

console.log("Võrdlus eri pikkuste juures mõlema valemiga");
let vastus:number[][]=[];
for(let pikkus=170; pikkus<200; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(90, pikkus), kehamassiindeks2(90, pikkus)]);
}
console.log(vastus);