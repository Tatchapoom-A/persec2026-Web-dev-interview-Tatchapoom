import { intToRoman, romanToInt } from "./case-4";

describe("Roman number converter", () => {
    test("should return correct Roman number", () => {
        expect(intToRoman(1989)).toBe("MCMLXXXIX");
        expect(intToRoman(5432)).toBe("MMMMMCDXXXII");
    });


    test("should return correct number", () => {
        expect(romanToInt("MCMLXXXIX")).toBe(1989);
        expect(romanToInt("MMMMMCDXXXII")).toBe(5432);
    });
})

