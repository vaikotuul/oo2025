import { IDCode } from "../class1";

test("Isiku sugu", () => {
    expect(new IDCode("50312180841").gender()).toBe("M");
    expect(new IDCode("37605030299").gender()).toBe("M");
    expect(new IDCode("40208228796").gender()).toBe("N");
})

test("Isiku sünniaasta", () => {
    expect(new IDCode("50312180841").year()).toBe("2003");
})