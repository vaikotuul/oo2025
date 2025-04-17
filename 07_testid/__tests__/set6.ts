import { Calculator } from "../calculator/calculator";

let calcobj: Calculator;

beforeEach(() => {
    calcobj = new Calculator();
});

test("empty int", () => {
    expect(calcobj.getPanelContents()).toBe("0");
});

test("simple input", () => {
    calcobj.pressButton('8');
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("87");
});