import { Word, Sentence } from '../proovikt1';

test("Loe mitu tähte on sõnas", () => {
    const word = new Word("test");
    expect(word.countLetter("t")).toBe(2);
    expect(word.countLetter("e")).toBe(1);
    expect(word.countLetter("x")).toBe(0);
});

test("Loe mitu tähte on lauses", () => {
    const sentence = new Sentence("see on test");
    expect(sentence.countLetter("e")).toBe(3);
    expect(sentence.countLetter("t")).toBe(2);
    expect(sentence.countLetter("s")).toBe(2);
    expect(sentence.countLetter("x")).toBe(0);
});