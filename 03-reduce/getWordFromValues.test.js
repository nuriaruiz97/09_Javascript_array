import { getWordFromValues } from "./getWordFromValues";

describe("getWordFromValues", () => {
  test("when given an array of numbers, it should return a string of those numbers", () => {
    const VALUES = [1, 2, 3];
    const expected = "123";

    const result = getWordFromValues(VALUES);

    expect(result).toBeDefined();
    expect(result).toBe(expected);
  });
});
