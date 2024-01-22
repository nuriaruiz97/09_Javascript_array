import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("sumNumbersFromInitialValue", () => {
  test("when given an array of numbers and an initial value, it should return the sum of those numbers plus the initial value (0)", () => {
    const NUMBERS = [1, 2, 3, 4, 5];

    const result = sumNumbersFromInitialValue(0, NUMBERS);

    const expected = 15;

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
    expect(result).not.toBe(10);
  });
  test("when given an array of numbers and an initial value, it should return the sum of those numbers plus the initial value (10)", () => {
    const NUMBERS = [1, 2, 3, 4, 5];

    const result = sumNumbersFromInitialValue(10, NUMBERS);

    const expected = 25;

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
    expect(result).not.toBe(15);
  });
});
