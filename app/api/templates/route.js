import { NextResponse } from "next/server";

type TemplateCategory =
  | "Blog Post"
  | "Email"
  | "Social Media"
  | "Marketing"
  | "Product Description"
  | "Landing Page"
  | "Newsletter"
  | "Report"
  | "Other";

const DB: Array<{
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  usedCount: number;
}> = [
  {
    id: "t1",
    title: "Professional Blog Post",
    description:
      "A well-structured blog post for business audiences with clear sections and actionable insights.",
    category: "Blog Post",
    usedCount: 42,
  },
  {
    id: "t2",
    title: "Engaging Email Campaign",
    description: "Compelling email copy that drives opens, clicks, and conversions.",
    category: "Email",
    usedCount: 38,
  },
  {
    id: "t3",
    title: "Social Media Thread",
    description: "A viral-worthy social media thread with hooks and engagement tactics.",
    category: "Social Media",
    usedCount: 55,
  },
  {
    id: "t4",
    title: "Product Description",
    description: "SEO-optimized product descriptions that sell features and benefits.",
    category: "Product Description",
    usedCount: 31,
  },
  {
    id: "t5",
    title: "Marketing Landing Page",
    description: "High-converting landing page copy with persuasive storytelling.",
    category: "Landing Page",
    usedCount: 27,
  },
  {
    id: "t6",
    title: "Weekly Newsletter",
    description: "Engaging newsletter format with curated content sections.",
    category: "Newsletter",
    usedCount: 19,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = (searchParams.get("search") || "").toLowerCase();
  const category = searchParams.get("category") || "all";

  let items = [...DB];

  if (category !== "all") items = items.filter((x) => x.category === category);

  if (search) {
    items = items.filter(
      (x) =>
        x.title.toLowerCase().includes(search) ||
        x.description.toLowerCase().includes(search)
    );
  }

  // sort: most used first
  items.sort((a, b) => b.usedCount - a.usedCount);

  return NextResponse.json({ items });
}
