export const config = {
  name: "Krish Maheshwari",
  email: "krishmaheshwari2003@gmail.com",
  socials: {
    github: "https://github.com/101krish",
    linkedin: "https://linkedin.com/in/krish-maheshwari"
  }
};

export function validateConfig(): boolean {
  if (!config.name || !config.email) return false;
  if (!config.socials.github.startsWith("https://")) return false;
  return true;
}
