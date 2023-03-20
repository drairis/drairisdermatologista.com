import {
  truncateString,
  capitalizeFirstLetter,
  firstName,
  normalizeString,
  capitalize,
  initials,
} from "../.";

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

describe("capitalizeFirstLetter", () => {
  it("should return the string with the first letter capitalized", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });
});

describe("firstName", () => {
  it("should return the first name", () => {
    const name = "John Doe";
    expect(firstName(name)).toBe("John");
  });
});

describe("normalizeString", () => {
  it("should return the string with all the accents removed", () => {
    const string = "áçãó";
    expect(normalizeString(string)).toBe("acao");
  });
});

describe("capitalize", () => {
  it("should return the string with the first letter capitalized", () => {
    const string = "hello world";
    expect(capitalize(string)).toBe("Hello World");
  });
  it("should return the string with the first letter capitalized - Input all uppercase", () => {
    const string = "HELLO WORLD";
    expect(capitalize(string)).toBe("Hello World");
  });
});
describe("initials", () => {
  it("should return the initials", () => {
    const string = "John Doe";
    expect(initials(string)).toBe("JD");
  });
});
