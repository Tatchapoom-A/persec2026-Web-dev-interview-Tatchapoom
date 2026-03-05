import { validateString } from "./case-1";

describe("Validate String (Brackets)", () => {
    test("should return true when correct format", () => {
        expect(validateString("()[]{}")).toBe(true);
        expect(validateString("([{}])")).toBe(true);
    });
    
    test("should return false when not closed brackets", () => {
        expect(validateString("([{])")).toBe(false);
    });
    test("should return false when incorrect sequence", () => {
        expect(validateString("([]{)}")).toBe(false);
    });
});