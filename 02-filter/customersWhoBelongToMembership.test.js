import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership";

describe("customersWhoBelongToMembership", () => {
  test("when CUSTOMERS array is [{ name: 'Foo', member: true },  { name: 'Bar', member: false },  { name: 'Fizz', member: true },  { name: 'Buzz', member: false },  { name: 'FizzBuzz', member: true }], should return [{ name: 'Foo', member: true },  { name: 'Fizz', member: true },  { name: 'FizzBuzz', member: true }]", () => {
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    const result = customersWhoBelongToMembership(CUSTOMERS);

    const expected = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
