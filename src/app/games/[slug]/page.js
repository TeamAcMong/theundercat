import Link from 'next/link';
import { games } from '@/data/games';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) return {};
  return {
    title: game.title,
    description: game.description.slice(0, 160),
  };
}

export default async function GameDetailPage({ params }) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  const otherGames = games.filter((g) => g.id !== game.id);

  return (
    <>
      <div className="sticky-back-nav">
        <Link href="/" className="page-header__back fade-in">← Back to Home</Link>
      </div>

      <header className="page-header" style={{ paddingTop: 'var(--sp-8)' }}>
        <h1 className="page-header__title neon-glow fade-in delay-1">{game.title}</h1>
        <p className="section-desc fade-in delay-2">{game.tagline}</p>
      </header>

      <main className="page-main" style={{ maxWidth: '960px' }}>
        {/* Hero Image + Info */}
        <div className="game-detail fade-in delay-2">
          <div className="game-detail__hero">
            <img src={game.image} alt={game.title} className="game-detail__image" />
            <div className="game-detail__meta">
              <div className="game-detail__stat">
                <span className="game-detail__stat-value neon-glow--cyan">{game.rating}★</span>
                <span className="game-detail__stat-label">Rating</span>
              </div>
              <div className="game-detail__stat">
                <span className="game-detail__stat-value neon-glow--cyan">{game.downloads}</span>
                <span className="game-detail__stat-label">Downloads</span>
              </div>
              <div className="game-detail__stat">
                <span className="game-detail__stat-value neon-glow--cyan">{game.category}</span>
                <span className="game-detail__stat-label">Category</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="game-detail__section">
            <h2>About This Game</h2>
            <p>{game.description}</p>
          </div>

          {/* Features */}
          <div className="game-detail__section">
            <h2>Features</h2>
            <ul className="game-detail__features">
              {game.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div className="game-detail__section" style={{ textAlign: 'center' }}>
            <h2>Download Now</h2>
            <div className="game-detail__download">
              {game.androidUrl && (
                <a href={game.androidUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
                  Google Play →
                </a>
              )}
              {game.iosUrl && (
                <a href={game.iosUrl} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ background: 'linear-gradient(135deg, var(--secondary), #0891B2)' }}>
                  App Store →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Related Games */}
        {otherGames.length > 0 && (
          <section style={{ marginTop: 'var(--sp-16)' }}>
            <div className="section-header">
              <span className="section-badge">🎮 More Games</span>
              <h2 className="section-title">You Might Also Like</h2>
            </div>
            <div className="related-games">
              {otherGames.map((g) => (
                <Link key={g.id} href={`/games/${g.slug}`} className="related-game-card fade-in">
                  <img src={g.image} alt={g.title} className="related-game-card__img" />
                  <span className="related-game-card__title">{g.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
    </>
  );
}
