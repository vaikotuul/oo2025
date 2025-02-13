class Potentsiomeeter{
    nurk: number = 0;
    constructor(protected nurkMin:number, protected nurkMax:number, protected rMin:number, protected rMax:number){}
    muudaNurk(delta:number):void{
        let uusNurk=this.nurk+delta;
        if(uusNurk<this.nurkMin){throw new Error("Nurk on liiga väike");}
        if(uusNurk>this.nurkMax){throw new Error("Nurk on liiga suur");}
        this.nurk=uusNurk;
    }
    getR():number{
        let koht = (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
        return this.rMin + koht * (this.rMax - this.rMin);
    }
}

let p1:Potentsiomeeter=new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(-200);
console.log(p1);
console.log("Hetke takistus:", p1.getR(), "oomi.");
