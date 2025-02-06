class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
    //Loo käsklus vektori korrutamiseks arvuga
    korruta(kordaja:number):Vektor{
        return new Vektor(this.x*kordaja, this.y*kordaja);
    }
    skalaarkorrutis_koord(teine:Vektor):number{
        return this.x*teine.x+this.y*teine.y;
    }
    suurendaX():void{
        this.x+=1;
    }
    //Loo massiiv neljast vektorist ja leia nende kõigi summa
}

console.log("Vektor alguses")
let v1:Vektor=new Vektor(3, 5);
v1.kuva();
console.log("Vektori pikkus")
console.log(v1.pikkus());

console.log("Vektor suurendatud x-iga");
v1.suurendaX();
v1.kuva();

console.log("Vektorite liitmine");
let v3:Vektor=v1.liida(new Vektor(1, 2));
v3.kuva();

console.log("Vektori korrutamine arvuga");
v1.korruta(2).kuva();

console.log("Skalaarkorrutis");
let v4:Vektor=new Vektor(1, 2);
console.log(v1.skalaarkorrutis_koord(v4));

console.log("Vaguni energia kasutus")
let vagun:Vektor=new Vektor(9, 0);
let energia:number=v1.skalaarkorrutis_koord(vagun);
console.log(energia);

console.log("Massiivi summa");
let vektorid:Vektor[]=[
    new Vektor(1, 2), 
    new Vektor(3, 4), 
    new Vektor(5, 6), 
    new Vektor(7, 8)
];
let asukoht=vektorid[0];
for(let i=1; i<vektorid.length; i++){
    asukoht=asukoht.liida(vektorid[i]);
}
asukoht.kuva();
