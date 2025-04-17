import { averageSpeed } from "../f2";

test("Kahe kiiruste keskmised", () => {
    expect(averageSpeed(30, 60)).toBe(40);
    expect(averageSpeed(25, 25)).toBe(25);
})