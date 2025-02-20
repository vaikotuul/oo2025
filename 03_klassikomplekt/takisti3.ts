class Resistor{
    protected width: number;
    protected height: number=30;
    constructor(protected r: number, protected g, 
         protected startx: number, protected endx: number, 
          protected y: number){
        this.width=this.endx-this.startx;
        this.draw();
    }
    draw(){
        this.g.clearRect(this.startx, this.y-this.height/2, this.width, this.height);
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx+this.width/4, this.y);
        this.g.rect(this.startx+this.width/4, this.y-this.height/2, this.width/2, this.height);
        this.g.moveTo(this.startx+this.width*3/4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r+" Ω", this.startx+this.width/3, this.y+3);
    }
    setR(r:number){
        this.r=r;
        this.draw();
    }
    getR():number{
        return this.r;
    }
}