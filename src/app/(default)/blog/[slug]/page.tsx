import React from 'react';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // This is a placeholder. In a real app, you would fetch the blog post by slug
  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">{params.slug}</h1>
      <div className="text-[color:var(--fg-dim)] mb-6">
        September 7, 2025 • 5 min read
      </div>
      <div className="prose">
        <p>This is a placeholder for blog post content with slug: {params.slug}</p>
      </div>
    </article>
  );
}

// This would be used in a real app to generate static paths or return 404
export async function generateStaticParams() {
  return [];
}
