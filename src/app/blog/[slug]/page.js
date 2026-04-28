import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split('\n\n');

  return (
    <>
      <header className="page-header">
        <Link href="/blog" className="page-header__back fade-in">← Back to Blog</Link>
        <h1 className="page-header__title neon-glow fade-in delay-1">{post.title}</h1>
        <p className="section-desc fade-in delay-2">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <main className="page-main" style={{ maxWidth: '720px' }}>
        <article className="content-box fade-in delay-3">
          {paragraphs.map((p, i) => {
            if (p.startsWith('**') && p.endsWith('**')) {
              return <h2 key={i}>{p.replace(/\*\*/g, '')}</h2>;
            }
            const parts = p.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i}>
                {parts.map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j}>{part.replace(/\*\*/g, '')}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
          <div className="blog-post__tags" style={{ marginTop: 'var(--sp-8)' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="blog-card__tag">#{tag}</span>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
