import removeMarkdown from "remove-markdown";

export function cleanMarkdown(content) {
  return removeMarkdown(content || "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
