import type { Category, BlogPost } from "types/blog";

export const categories: Category[] = [
  "all",
  "business",
  "marketing",
  "computer",
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How I Think About Building Consistent Products",
    excerpt:
      "My notes on product thinking, customer empathy, and how small improvements compound over time.",
    category: "business",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    slug: "building-consistent-products",
  },
  {
    id: 2,
    title: "Marketing Lessons I Learned From Writing Online",
    excerpt:
      "A simple breakdown of audience, positioning, and content loops that actually keep working.",
    category: "marketing",
    date: "Mar 04, 2026",
    readTime: "6 min read",
    slug: "marketing-lessons-from-writing-online",
  },
  {
    id: 3,
    title: "React Patterns I Reuse in Real Projects",
    excerpt:
      "Clean component structure, reusable UI patterns, and practical state management notes.",
    category: "computer",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    slug: "react-patterns-i-reuse",
  },
  {
    id: 4,
    title: "Why Distribution Matters as Much as the Product",
    excerpt:
      "My handwritten notes on why good ideas still need the right channels, story, and timing.",
    category: "business",
    date: "Feb 16, 2026",
    readTime: "4 min read",
    slug: "why-distribution-matters",
  },
  {
    id: 5,
    title: "Understanding Positioning With Simple Examples",
    excerpt:
      "A beginner-friendly way to think about brand positioning and why clarity beats complexity.",
    category: "marketing",
    date: "Feb 08, 2026",
    readTime: "7 min read",
    slug: "understanding-positioning",
  },
  {
    id: 6,
    title: "Notes on JavaScript Closures That Finally Clicked",
    excerpt:
      "A practical explanation of closures with examples that made the concept feel intuitive for me.",
    category: "computer",
    date: "Jan 30, 2026",
    readTime: "6 min read",
    slug: "javascript-closures-notes",
  },
];
