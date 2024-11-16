export interface ProjectItem {
  title: string;
  category: string;
  featured: boolean;
}

export function filterProjectsByCategory(projects: ProjectItem[], category: string): ProjectItem[] {
  if (category === "All") return projects;
  return projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
