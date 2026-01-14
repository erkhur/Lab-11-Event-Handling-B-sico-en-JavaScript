export function countText(text) {
  const characters = text.length;
  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  return { words, characters };
}
