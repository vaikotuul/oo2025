class Resistor {
    r: number = 0;
    maxPower: number = 0;
    constructor(r: number, maxPower: number) {
      this.r = r;
      this.maxPower = maxPower;
    }

    getCurrent(u: number): number {
      return u / this.r;
    }

    getPower(u: number): number {
      return u * this.getCurrent(u);
    }

    isVoltageAllowed(u: number): boolean {
      return this.getPower(u) <= this.maxPower;
    }
  }
let r1=new Resistor(110, 0.25);
let r2=new Resistor(220, 0.5);
let r3=new Resistor(4700, 1.0);
console.log(r1.getPower(10));
console.log(r2.isVoltageAllowed(12));
let rs:Resistor[]=[r1, r2, r3];
let v1:Resistor[]=[];
for(let r of rs){
  if(r.isVoltageAllowed(10)){v1.push(r);}
}
console.log(v1);

//  let r1: Resistor = new Resistor(110);
//  console.log(r1.getCurrent(5));
//  let r2: Resistor = new Resistor(220);
//  console.log(r2.getCurrent(5));
//  let r3: Resistor = new Resistor(4700);
//  console.log(r3.getCurrent(5));
//
// let takistid:Resistor[] = [r1, r2, r3];
//  console.log(takistid);
//
//  let voolusumma=0;
//  for(let takisti of takistid){
//    voolusumma+=takisti.getCurrent(5);
//  }
//  console.log(voolusumma);
//
//  console.log(takistid.reduce((siiani, praegune) => siiani + praegune.getCurrent(5), 0));

