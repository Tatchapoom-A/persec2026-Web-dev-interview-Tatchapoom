import { autocomplete } from "./case-3";

describe("Auto complete", () => {
    const mockArray = ["xTestxxxxx", "Testxxxx", "xxxxABC", "XXXXTest"];
    const search = "test"
    test("should return two items", () => {
        expect(
            autocomplete(search, mockArray, 2)
        ).toStrictEqual(
            ["Testxxxx", "xTestxxxxx",]
        );
    });

    test("should return three items", () => {
        const mockArray = ["xTestxxxxx", "Testxxxx", "xxxxABC", "XXXXTest"];
        const search = "test"
        expect(
            autocomplete(search, mockArray, 3)
        ).toStrictEqual(
            ["Testxxxx", "xTestxxxxx", "XXXXTest"]
        );
    });
})