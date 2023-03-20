import { validateEmail } from "./index";

describe("validateEmail", () => {
  it("should return true for valid email", () => {
    const email = "joaodasilva@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });
  it("should return false for invalid email", () => {
    const email = "joaodasilva@gmail";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
  it("should return false for invalid email", () => {
    const email = "joaodasilva2gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});
