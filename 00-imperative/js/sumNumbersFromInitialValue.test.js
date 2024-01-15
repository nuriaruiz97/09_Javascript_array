import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";
describe("Given NUMBERS array", () => {
  test("When reciving NUMBER, the return should be: [2, 3, 4, 5, 6]", () => {
    //arrange
    const NUMBER = 1;

    //act
    const EXPECTED_RESULT = sumNumbersFromInitialValue(NUMBER);

    //asert
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual([2, 3, 4, 5, 6]);
  });
});
