import { Input } from ".";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("renders correctly", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
