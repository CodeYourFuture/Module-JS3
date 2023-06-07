import { removeVowels } from "./remove-vowels";

const removeVowels = require("./remove-vowels");

describe("removeVowels", () => {
  it("should remove all vowels from the word", () => {
    expect(removeVowels("Irina")).toBe("rn");
    expect(removeVowels("Etza")).toBe("tz");
    expect(removeVowels("Daniel")).toBe("Dnl");
  });

  it("should return an empty string when the word has only vowels", () => {
    expect(removeVowels("aeiou")).toBe("");
  });

  it("should handle words with mixed cases", () => {
    expect(removeVowels("OpenAI")).toBe("pn");
    expect(removeVowels("GPT-3.5")).toBe("GPT-3.5");
    expect(removeVowels("Language")).toBe("Lngg");
  });

  it("should handle words with numbers and special characters", () => {
    expect(removeVowels("Hello!")).toBe("Hll!");
    expect(removeVowels("W0rld")).toBe("W0rld");
    expect(removeVowels("@bCdEfG")).toBe("@bCdFG");
  });
});
