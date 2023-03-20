import { render, waitFor } from "@testing-library/react";
import { Container, PageHead } from "../.";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

// create a test for the PageHead component testing if it renders an array of tags
describe("PageHead", () => {
  it("should render PageHead component", async () => {
    render(
      <Container>
        <PageHead title="usereact" />
      </Container>,
      { container: document.head }
    );

    await waitFor(() => {
      expect(document.title).toEqual("usereact");
    });
  });

  it("should render PageHead component with meta tags", async () => {
    const element = render(
      <Container>
        <PageHead
          title="usereact"
          description="usereact is a react library for building user interfaces"
          image={{
            url: "https://use.react/static/og-image.jpg",
            alt: "usereact",
          }}
          article={{
            published_at: "2020-05-05",
            updated_at: "2020-05-05",
            tags: ["react", "library"],
          }}
        />
      </Container>,
      { container: document.head }
    );

    await waitFor(() => {
      expect(element.getByTestId("_meta_tag_react")).toBeTruthy();
      expect(element.getByTestId("_meta_tag_library")).toBeTruthy();
    });
  });
});
