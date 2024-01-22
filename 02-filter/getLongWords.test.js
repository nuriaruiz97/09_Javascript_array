import { getLongWords } from "./getLongWords";

describe("Given getLongWords function", () => {
  test("when given an array of words, should return an array of words witch are greater or equal to 5", () => {
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expected = ["JavaScript", "TypeScript"];

    const result = getLongWords(LANGUAGES);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
  test("when given an array of words, should return an array of words witch are greater or equal to 5", () => {
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const expected = ["George", "Ringo"];

    const result = getLongWords(BEATLES);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
