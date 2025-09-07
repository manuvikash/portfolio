import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello, World", excerpt: "Kickoff post about this portfolio." },
  { slug: "nextjs-optimizations", title: "Next.js Optimizations", excerpt: "A few pragmatic wins for speed." },
  { slug: "ui-motion", title: "UI Motion", excerpt: "Designing animations that feel effortless." },
];

export const metadata = {
  title: "Blog",
  description: "Notes on building and shipping software.",
};

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold glow rise">Blog</h1>
      <p className="mt-2 text-[color:var(--fg-dim)] rise rise-1">Thoughts on engineering, UX, and performance.</p>
      <div className="mt-8 grid gap-4 rise rise-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-5 block">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-1 text-[color:var(--fg-dim)]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


