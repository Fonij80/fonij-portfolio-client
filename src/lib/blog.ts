import fm from "front-matter";
import type {
  BlogPost,
  BlogPostMeta,
  BlogSection,
  Category,
} from "@/types/blog";

const markdownModules = import.meta.glob("@/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

type FrontMatterAttributes = {
  slug?: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "all">;
  publishedAt: string;
  readTime: string;
  coverImage?: string;
  coverImageAlt?: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\u0600-\u06FFa-z0-9\\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseSections(markdown: string): BlogSection[] {
  const normalized = markdown.trim();
  const matches = [...normalized.matchAll(/^##\\s+(.+)$/gm)];

  if (matches.length === 0) {
    return [
      {
        id: "article",
        title: "Article",
        content: normalized,
      },
    ];
  }

  const sections: BlogSection[] = [];

  for (let i = 0; i < matches.length; i++) {
    const currentMatch = matches[i];
    const nextMatch = matches[i + 1];

    const title = currentMatch[1].trim();
    const start = currentMatch.index ?? 0;
    const end = nextMatch?.index ?? normalized.length;
    const sectionMarkdown = normalized.slice(start, end).trim();

    sections.push({
      id: slugify(title),
      title,
      content: sectionMarkdown,
    });
  }

  return sections;
}

function parsePost(filePath: string, rawMarkdown: string): BlogPost {
  const parsed = fm<FrontMatterAttributes>(rawMarkdown);
  const data = parsed.attributes;
  const content = parsed.body;

  const fileName = filePath.split("/").pop()?.replace(".md", "") ?? "";
  const slug = data.slug || fileName;

  const meta: BlogPostMeta = {
    slug,
    title: normalizeToString(data.title),
    excerpt: normalizeToString(data.excerpt),
    category: data.category,
    publishedAt: normalizeToString(data.publishedAt),
    readTime: normalizeToString(data.readTime),
    coverImage: data.coverImage
      ? normalizeToString(data.coverImage)
      : undefined,
    coverImageAlt: data.coverImageAlt
      ? normalizeToString(data.coverImageAlt)
      : undefined,
  };

  return {
    ...meta,
    content: content.trim(),
    sections: parseSections(content),
  };
}

export const blogPosts: BlogPost[] = Object.entries(markdownModules)
  .map(([filePath, rawMarkdown]) => parsePost(filePath, rawMarkdown as string))
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const blogPostMetas: BlogPostMeta[] = blogPosts.map(
  ({ content, sections, ...meta }) => meta,
);

export const categories = [
  "all",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
] as const;

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function normalizeToString(value: unknown): string {
  if (value instanceof Date) {
    return value.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (typeof value === "string") {
    return value;
  }

  return String(value ?? "");
}
