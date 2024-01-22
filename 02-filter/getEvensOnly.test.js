import { getEvensOnly } from "./getEvensOnly.js";

describe("given getEvensOnly function", () => {
  test("when COUNTERS array is [2, 25, 43, 12, 67, 42, 28], should return [ 2, 12, 42, 28 ]", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

    const result = getEvensOnly(COUNTERS);

    expect(result).toBeDefined();
    expect(result).toEqual([2, 12, 42, 28]);
  });
});
