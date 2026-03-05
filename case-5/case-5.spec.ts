import { reSequenceInt } from "./case-5";


describe("Re sequence number", () => {
    test("should return correct number", () => {
        expect(reSequenceInt(37492)).toBe(97432);
        expect(reSequenceInt(234985)).toBe(985432);
    });
})

