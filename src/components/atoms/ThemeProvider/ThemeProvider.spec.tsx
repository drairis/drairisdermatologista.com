import { render } from "@testing-library/react";
import { ThemeProvider } from ".";

describe("ThemeProvider", () => {
  it("should render without crashing", () => {
    const component = render(
      <ThemeProvider>
        <h1>Hello World</h1>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
  it("should render without crashing with darkMode", () => {
    const component = render(
      <ThemeProvider>
        <h1>Hello World</h1>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
