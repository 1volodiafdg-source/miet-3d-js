const KEY = "afisha_favorites_v1";

export function getFavorites(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(id: string): string[] {
  const current = new Set(getFavorites());
  if (current.has(id)) current.delete(id);
  else current.add(id);

  const next = Array.from(current);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
