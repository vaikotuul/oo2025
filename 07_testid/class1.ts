export class IDCode {
    constructor(protected code:string){}

    gender(){
        return parseInt(this.code[0]) % 2===0? "N": "M"
    }
    year(){
        if(this.code[0] === "2" || this.code[0] === "3"){
            return "19" + this.code.slice(1,3);
        }
        else if(this.code[0] === "4" || this.code[0] === "5"){
            return "20" + this.code.slice(1,3);
        }
    }
}