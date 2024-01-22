import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer";

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  test("when COUNTRIES array is ['United Kingdom', 'Italy', 'France', 'Portugal', 'Greece'], should return ['Italy']", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];

    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    const expected = ["Italy"];

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
