import {Calculator} from "../calculator/calculator";

let calcobj:Calculator;

beforeEach(() => {
    calcobj=new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("0");
 });

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});

test('simple input', ()=>{
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("8");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("78");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("32");
});
