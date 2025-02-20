class Resistor{
    readonly height:number=30
    readonly width:number=70;
    protected parent:SeriesCircuit;
    constructor(protected r){
    }
    getResistance(){return this.r;}
    setParent(p:SeriesCircuit){
        this.parent=p;
    }
    draw(g, startx:number, y:number){
       g.beginPath();
       g.moveTo(startx, y);
       g.lineTo(startx+this.width/4, y);
       g.rect(startx+this.width/4, y-10, this.width/2, 20);

       if (this.r >= 500){
        g.fillStyle = "brown";
        g.fill();
       }
       g.fillStyle = "black";
       g.fillText(this.r+ " Ω", startx+this.width/4+1, y+2);
       g.moveTo(startx+this.width*3/4, y);
       g.lineTo(startx+this.width, y);
       g.stroke();
    }
    getWidth(){return this.width;}
    getR(){return this.r;}
    setR(r: number){
        this.r=r;
        if(parent){
            this.parent.draw();
        }
    }
}

class SeriesCircuit{
   protected resistors: Resistor[]=[];
   protected width: number=10;
   constructor(protected g, protected startx: number, protected y: number){
   }
   push(r: Resistor){
      this.resistors.push(r);
      this.width+=r.getWidth();
      r.setParent(this);
      this.draw();
   }  
   draw(){
      this.g.clearRect(0, this.y-20, this.width, 40);
      let x=this.startx;
      this.g.beginPath();
      this.g.moveTo(x, this.y);
      x+=5;
      this.g.lineTo(x, this.y);
      this.g.stroke()
      let areaStartX=x;
      for(let i=0; i<this.resistors.length; i++){
        this.resistors[i].draw(this.g, x, this.y);
        x+=this.resistors[i].getWidth();
      }
      this.g.strokeStyle="lightgray";
      this.g.beginPath();
      this.g.rect(areaStartX, this.y-20, x-areaStartX, 40);
      this.g.stroke();
      this.g.strokeStyle="black";
      this.g.beginPath();
      this.g.moveTo(x, this.y);
      x+=5;
      this.g.lineTo(x, this.y);
      this.g.stroke()
      this.g.fillText(this.getR()+ " Ω", this.startx+this.width/2-10, this.y+20)
   }
   getR(){
     let result:number=0;
     for(let r of this.resistors){
        result+=r.getR();
     }
     return result;
   }
}
