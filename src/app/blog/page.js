import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog',
  description: 'News, updates, and behind-the-scenes from The Under Cats game studio.',
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Blog</h1>
        <Link href="/" className="page-header__back fade-in delay-2">← Back to Home</Link>
      </header>

      <main className="page-main" style={{ maxWidth: '800px' }}>
        <div className="blog-list">
          {sortedPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={`blog-card fade-in delay-${i + 1}`}>
              <div className="blog-card__date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <h2 className="blog-card__title">{post.title}</h2>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-card__tag">#{tag}</span>
                ))}
              </div>
              <span className="blog-card__read">Read more →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
