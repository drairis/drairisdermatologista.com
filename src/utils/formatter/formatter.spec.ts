import { RichTextBlock } from "prismic-reactjs";
import { formatPhone, removePhoneFormat, formatPrismicTags } from ".";

// create a describe block for each function to test
describe("formatPhone", () => {
  // create an it block for each test case
  it("should format phone number with a string as input value", () => {
    const phone = "1234567890";
    const expected = "(12) 3456-7890";
    const actual = formatPhone(phone);
    expect(actual).toBe(expected);
  });
  it("should remove format from phone", () => {
    const phone = "(12) 3456-7890";
    const expected = "1234567890";
    const actual = removePhoneFormat(phone);
    expect(actual).toBe(expected);
  });
});

describe("formatPrismicTags", () => {
  it("should format tags", () => {
    const tags = [
      { tag: [{ text: "tag1" }] as RichTextBlock[] },
      { tag: [{ text: "tag2" }] as RichTextBlock[] },
      { tag: [{}] as RichTextBlock[] },
    ];
    const expected = ["tag1", "tag2"];
    const actual = formatPrismicTags(tags);
    expect(actual).toEqual(expected);
  });
});
