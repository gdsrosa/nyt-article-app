export function slugify(text: string) {
  if (!text) return;
  return text
    .replace(/^\s+|\s+$/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-UK").split("/").join(".");
}
