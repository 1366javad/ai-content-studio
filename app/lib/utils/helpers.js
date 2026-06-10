export function truncateText(text = "", length = 120) {
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length) + "...";
}

export function formatRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
export function formatNumber(number = 0) {
  return new Intl.NumberFormat("en-US").format(number);
}

export function calculateReadTime(text = "") {
  const words = text.split(" ").length;

  const minutes = Math.ceil(words / 200);

  return `${minutes} min read`;
}

export function getErrorMessage(error) {
  const text = error?.message || error?.error || JSON.stringify(error);

  if (text.includes("more credits")) {
    return "AI service credits have been exhausted. Please try again later.";
  }

  if (text.includes("rate limit")) {
    return "Too many requests. Please wait a moment and try again.";
  }

  if (text.includes("timeout")) {
    return "The AI service took too long to respond.";
  }

  if (text.includes("network")) {
    return "Network connection error.";
  }

  return "Something went wrong while generating content.";
}

export const quickActionEmojis = {
  "Blog Post": "📝",
  "Email Campaign": "✉️",
  "Email Copy": "✉️",
  "Social Media": "📱",
  "Product Description": "🛍️",
  "Product Copy": "🛍️",
  Newsletter: "📰",
  "Landing Page": "🌐",
  "Facebook Ad": "📣",
  "Google Ad": "🔍",
  "Case Study": "📊",
  "LinkedIn Post": "💼",
};
