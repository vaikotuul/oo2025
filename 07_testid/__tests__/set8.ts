import { Calculator } from "../calculator/calculator";

let calcobj: Calculator;

beforeEach(() => {
    calcobj = new Calculator();
});

test('backspace functionality', () => {
    calcobj.pressButton('5');
    calcobj.pressButton('2');
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("527");
    calcobj.pressButton('←');
    expect(calcobj.getPanelContents()).toBe("52");
    calcobj.pressButton('←');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('←');
    expect(calcobj.getPanelContents()).toBe("0");
});

test('constant pi', () => {
    calcobj.pressButton('pi');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(Math.PI, 6);
});

test('constant e', () => {
    calcobj.pressButton('e');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(Math.E, 6);
});