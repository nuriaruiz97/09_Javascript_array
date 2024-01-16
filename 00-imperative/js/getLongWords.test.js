import { getLongWords } from "./getLongWords";

describe("Given getLongWords function", () => {
  test("when reciving LANGUAGES array, should return : ['JavaScript', 'TypeScript']", () => {
    // arrange
    const WORDS = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

    // act
    const EXPECTED_RESULT = getLongWords(WORDS);

    // assert
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual(["JavaScript", "TypeScript"]);
  });
});
