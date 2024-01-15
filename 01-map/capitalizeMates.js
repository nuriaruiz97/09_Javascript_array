/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeMates = (MATES) => {
  const mapedArray = MATES.map((name) => {
    const currentName = name.toUpperCase();
    return currentName;
  });

  return mapedArray;
};
