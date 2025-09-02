import type { Metadata } from "next";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "hello-world",
    title: "Hello, World",
    date: "2025-01-01",
    content: `Welcome to the blog. This space will host short, focused notes on building delightful, fast software. Expect pragmatic tips and examples.`,
  },
  {
    slug: "nextjs-optimizations",
    title: "Next.js Optimizations",
    date: "2025-02-10",
    content: `Prefer streaming, cache smartly, ship less JS, and measure. Small wins add up.`,
  },
  {
    slug: "ui-motion",
    title: "UI Motion",
    date: "2025-03-05",
    content: `Motion should guide attention and reinforce structure. Ease with cubic-beziers; keep it subtle.`,
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 120),
    openGraph: { title: post.title, description: post.content.slice(0, 200) },
    twitter: { title: post.title, description: post.content.slice(0, 200) },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="max-w-3xl mx-auto py-12 rise">
      <h1 className="text-3xl font-bold glow">{post.title}</h1>
      <p className="mt-1 text-sm text-[color:var(--fg-dim)]">{new Date(post.date).toLocaleDateString()}</p>
      <div className="prose prose-invert mt-6 leading-7 text-[color:var(--fg-0)]">
        <p>{post.content}</p>
      </div>
    </article>
  );
}


