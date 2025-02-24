export function matchTechStack(required: string[], available: string[]): boolean {
  if (required.length === 0) return true;
  const availLower = available.map(t => t.toLowerCase());
  return required.every(req => availLower.includes(req.toLowerCase()));
}
