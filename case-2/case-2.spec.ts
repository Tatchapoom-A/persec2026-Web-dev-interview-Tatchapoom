import { sortStrings } from "./case-2";

describe("Sort array of string", () => {
    test("should return correct sorted array", () => {

        expect(
            sortStrings(["TH19", "SG20" , "TH2"])
        ).toStrictEqual(
            [ "SG20", "TH2", "TH19" ]
        );

        expect(
            sortStrings(["TH10", "TH3Netflix", "TH1", "TH7"])
        ).toStrictEqual(
            [ "TH1", "TH3Netflix", "TH7", "TH10"]
        );

    });
})