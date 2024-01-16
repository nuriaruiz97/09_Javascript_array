import { feedMonkeys } from "./feedMonkeys.js";
describe("Given feedMonkeys", () => {
  test("when 🍌 is provided as argument Then exècted array should be returned ", () => {
    const fruit = "🍌";
    const EXPECTED_RESULT = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    const monkeys = feedMonkeys(fruit);

    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(EXPECTED_RESULT);
  });
  test("when 🍎 is provided as argument Then exècted array should be returned ", () => {
    const fruit = "🍎";
    const EXPECTED_RESULT = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    const monkeys = feedMonkeys(fruit);
    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(EXPECTED_RESULT);
  });
});
