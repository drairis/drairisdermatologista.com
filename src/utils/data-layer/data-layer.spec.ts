import { pushDataLayer } from ".";

describe("pushDataLayer", () => {
  it("should push data to data layer", () => {
    const data = {
      event: "event",
      eventCategory: "eventCategory",
      eventAction: "eventAction",
      eventLabel: "eventLabel",
      eventValue: "eventValue",
      nonInteraction: "nonInteraction",
    };
    pushDataLayer(data);
    expect(window.dataLayer).toEqual([data]);
  });
});
