import { removeVowelsFromWords } from "./remove-vowels-in-array";

describe("removeVowelsFromWords", () => {
  it("should remove vowels from all words in the array", () => {
    const words = ["Irina", "Etza", "Daniel"];
    const expectedOutput = ["rn", "tz", "Dnl"];
    expect(removeVowelsFromWords(words)).toEqual(expectedOutput);
  });

  it("should return an empty array when the input array is empty", () => {
    const words = [];
    const expectedOutput = [];
    expect(removeVowelsFromWords(words)).toEqual(expectedOutput);
  });

  it("should handle words with mixed cases", () => {
    const words = ["OpenAI", "GPT-3.5", "Language"];
    const expectedOutput = ["pn", "GPT-3.5", "Lngg"];
    expect(removeVowelsFromWords(words)).toEqual(expectedOutput);
  });

  it("should handle words with numbers and special characters", () => {
    const words = ["Hello!", "W0rld", "@bCdEfG"];
    const expectedOutput = ["Hll!", "W0rld", "@bCdFG"];
    expect(removeVowelsFromWords(words)).toEqual(expectedOutput);
  });
});
