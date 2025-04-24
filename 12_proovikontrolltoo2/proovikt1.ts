interface LetterCounter {
    countLetter(letter: string): number;
}

export abstract class Text implements LetterCounter {
    abstract askContent(): string;

    countLetter(letter: string): number {
        const content = this.askContent();
        let count = 0;
        for (const char of content) {
            if (char === letter) {
                count++;
            }
        }
        return count;
    }
}

export class Word extends Text {
    constructor(private word: string) {
        super();
    }

    askContent(): string {
        return this.word;
    }
}

export class Sentence extends Text {
    private words: Word[] = [];

    constructor(sentence: string) {
        super();
        const wordObjects: {[word: string]: Word} = {};

        this.words = sentence.split(' ').map(word => {
            if (!wordObjects[word]) {
                wordObjects[word] = new Word(word);
            }
            return wordObjects[word];
        });
    }

    askContent(): string {
        return this.words.map(word => word.askContent()).join(' ');
    }

    countLetter(letter: string): number {
        return this.words.reduce((sum, word) => sum + word.countLetter(letter), 0);
    }
}