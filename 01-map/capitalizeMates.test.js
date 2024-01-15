import { capitalizeMates } from "./capitalizeMates";

describe("Given capitalizeMates function", () => {
  test("it shoul return each mate in capital letters", () => {
    //arrange
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

    //act
    const EXPECT_RESULT = capitalizeMates(MATES);

    //assert
    expect(EXPECT_RESULT).toEqual(["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"]);
  });
});
