import { TextAnalyzer } from "../class2";

test("A tähti tekstis", () => {
    expect(new TextAnalyzer("Aias sadas saia").countLetterA()).toBe(6);
    expect(new TextAnalyzer("Apples and bananas").countLetterA()).toBe(5);
});

test("Täishäälikute loend tekstis", () => {
    expect(new TextAnalyzer("Aias sadas saia").countVowels()).toBe(8);
    expect(new TextAnalyzer("Apples and bananas").countVowels()).toBe(6);
});