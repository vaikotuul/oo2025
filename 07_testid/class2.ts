export class TextAnalyzer{
    constructor(protected tekst:string){
        this.tekst = tekst
    };

    countLetterA(){
        return (this.tekst.match(/a/gi) || []).length;
    }

    countVowels(){
        return (this.tekst.match(/[aeiou]/gi) || []).length;
    }
}