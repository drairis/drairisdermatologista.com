import { truncateString } from "../.";

describe("truncateString", () => {
  it("should return the string if the string length is less than the number", () => {
    expect(truncateString("Hello", 5)).toBe("Hello");
  });
  it("should return the string if the string length is equal to the number", () => {
    expect(truncateString("Hello", 5)).toBe("Hello");
  });
  it("should return the string if the string length is greater than the number", () => {
    expect(truncateString("Hello World", 5)).toBe("Hello...");
  });
});
