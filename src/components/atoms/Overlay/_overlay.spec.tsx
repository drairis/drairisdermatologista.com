import React, { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { OverlayProps } from "./interface";

import { Overlay } from ".";

const WithProps = ({ ...args }: OverlayProps) => {
  return <Overlay {...args} />;
};

const WithState = () => {
  const [active, setActive] = useState(true);
  return <Overlay isVisible={active} close={() => setActive(false)} />;
};

describe("overlay specs", () => {
  afterEach(cleanup);

  it("should not be displayed when is not visible", () => {
    const { getByTestId } = render(<WithProps isVisible={false} />);
    expect(getByTestId("overlay")).toHaveStyle("display: none");
  });

  it("should be displayed when is visible", () => {
    const { getByTestId } = render(<WithProps isVisible={true} />);
    expect(getByTestId("overlay")).toHaveStyle("display: block");
  });

  it("should close when click on overlayl", () => {
    const { getByTestId } = render(<WithState />);
    expect(getByTestId("overlay")).toHaveStyle("display: block");
    fireEvent.click(getByTestId("overlay"));
    expect(getByTestId("overlay")).toHaveStyle("display: none");
  });
});
