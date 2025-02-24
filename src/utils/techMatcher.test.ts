import { matchTechStack } from "./techMatcher";

describe("tech matching helper", () => {
  test("matches tag elements accurately", () => {
    expect(matchTechStack(["React", "TS"], ["react", "ts", "tailwind"])).toBe(true);
  });
});
