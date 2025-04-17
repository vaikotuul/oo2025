import { kasPositiivne } from "../f1";

test("Kas number on positiivne", () => {
    expect(kasPositiivne(3)).toBe(true);
    expect(kasPositiivne(0)).toBe(false);
    expect(kasPositiivne(-5)).toBe(false);
})