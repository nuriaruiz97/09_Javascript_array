import { createLocalesSettings } from "./createLocalesSettings";

describe("createLocalesSettings", () => {
  test('when LOCALES array is ["EN", "US", "EN", "EN", "EN"], should return an object with locales settings', () => {
    const LOCALES = ["EN", "US", "EN", "EN", "EN"];

    const result = createLocalesSettings(LOCALES);

    const expected = {
      EN: { id: 0, enabled: true },
      US: { id: 1, enabled: false },
      EN: { id: 2, enabled: false },
      EN: { id: 3, enabled: false },
      EN: { id: 4, enabled: false },
    };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
