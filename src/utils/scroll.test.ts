import { scrollToElement } from "./scroll";

describe("scroller utilities", () => {
  it("ignores non-existent ids without erroring", () => {
    expect(() => scrollToElement("invalid-id")).not.toThrow();
  });
});
