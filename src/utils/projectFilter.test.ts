import { filterProjectsByCategory, ProjectItem } from "./projectFilter";

describe("project tags filter helper", () => {
  const items: ProjectItem[] = [
    { title: "Finance Tracker", category: "Web", featured: true },
    { title: "Voice Prep", category: "AI", featured: false }
  ];

  test("matches category keyword exactly", () => {
    const webItems = filterProjectsByCategory(items, "Web");
    expect(webItems.length).toBe(1);
  });
});
