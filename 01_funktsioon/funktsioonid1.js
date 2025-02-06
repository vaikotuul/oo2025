function kehamassiindeks(kg, cm) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log("VALEM 1");
console.log(kehamassiindeks(80, 190));
//console.log(kehamassiindeks("Mati", 190));
console.log("Massid sama pikkusega (Valem 1)");
var massid = [80, 72, 90, 100, 95];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log("KMI: " + kehamassiindeks(mass, 190));
}
console.log("Massid sama pikkusega masiivis (Valem 1)");
var indeksid = massid.map(function (mass) { return kehamassiindeks(mass, 190); });
console.log(indeksid);
//Loo teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal / pikkus meetrites astmes 2,5
//aitab käsklus Math.pow
function kehamassiindeks2(kg, cm) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
console.log("VALEM 2");
console.log(kehamassiindeks2(80, 190));
//arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
console.log("Massid sama pikkusega (Valem 2)");
var massid2 = [85, 90, 92, 95, 103];
for (var _a = 0, massid2_1 = massid2; _a < massid2_1.length; _a++) {
    var mass = massid2_1[_a];
    console.log("KMI2: " + kehamassiindeks2(mass, 190));
}
//näidakse, kuidas väärtused erinevad
console.log("Massid sama pikkusega masiivis (Valem 2)");
var indeksid2 = massid2.map(function (mass) { return kehamassiindeks2(mass, 190); });
console.log(indeksid2);
// arvutage mõlema valemiga sama massi ja eri pikkuste juures
//console.log("Võrdlus eri pikkuste juures mõlema valemiga");
//let pikkused:number[] = [180, 185, 190, 195, 200];
//for(let pikkus of pikkused){
//    console.log("KMI1: "+kehamassiindeks(90, pikkus));
//    console.log("KMI2: "+kehamassiindeks2(90, pikkus));
//}
console.log("Võrdlus eri pikkuste juures mõlema valemiga");
var vastus = [];
for (var pikkus = 170; pikkus < 200; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(90, pikkus), kehamassiindeks2(90, pikkus)]);
}
console.log(vastus);
