import {Word} from "../proovikt1";

test("Mitu tähte on sõnas 'pere'", () => {
    const word = new Word("pere");

    expect(word.countLetter("a")).toBe(0);
    expect(word.countLetter("p")).toBe(1);
    expect(word.countLetter("e")).toBe(2);
});
