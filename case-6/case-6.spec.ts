import { Tribonacci } from "./case-6";

describe("Tribonacci", () => {
    test("should return correct array number", () => {
        expect(Tribonacci([1,2,3], 5)).toStrictEqual([1,2,3,6,11]);
        expect(Tribonacci([3,2,4], 4)).toStrictEqual([3,2,4,9]);
    });
})