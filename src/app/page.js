import GameCard from '@/components/GameCard';
import { games, studioInfo } from '@/data/games';

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero">
        <a
          href={studioInfo.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero__logo-wrapper fade-in"
        >
          <img
            src={studioInfo.logo}
            alt="The Under Cats Logo"
            className="hero__logo float"
          />
          <h1 className="hero__title neon-glow">
            The Under Cats
          </h1>
        </a>
        <p className="hero__tagline fade-in delay-2">
          {studioInfo.tagline}
        </p>

        {/* Stats */}
        <div className="hero__stats fade-in delay-3">
          <div className="hero__stat">
            <span className="hero__stat-number neon-glow--cyan">{games.length}</span>
            <span className="hero__stat-label">Games</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number neon-glow--cyan">100K+</span>
            <span className="hero__stat-label">Downloads</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number neon-glow--cyan">4.5★</span>
            <span className="hero__stat-label">Avg Rating</span>
          </div>
        </div>
      </section>

      {/* ── Games Section ── */}
      <main className="games-section">
        <div className="section-header fade-in delay-2">
          <span className="section-badge">🎮 Our Collection</span>
          <h2 className="section-title">Featured Games</h2>
          <p className="section-desc">
            Handcrafted puzzle games that challenge your mind and spark your creativity.
          </p>
        </div>

        <div className="game-grid">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </main>

      {/* ── Features Section ── */}
      <section className="features-section">
        <div className="section-header fade-in">
          <span className="section-badge">✨ Why Us</span>
          <h2 className="section-title">What Makes Us Different</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card fade-in delay-1">
            <span className="feature-card__icon">🧩</span>
            <h3 className="feature-card__title">Brain Teasers</h3>
            <p className="feature-card__desc">
              Every game is designed to challenge your logic and problem-solving skills.
            </p>
          </div>
          <div className="feature-card fade-in delay-2">
            <span className="feature-card__icon">🎨</span>
            <h3 className="feature-card__title">Adorable Art</h3>
            <p className="feature-card__desc">
              Charming visuals and cute characters that make gaming a joy.
            </p>
          </div>
          <div className="feature-card fade-in delay-3">
            <span className="feature-card__icon">📱</span>
            <h3 className="feature-card__title">Play Anywhere</h3>
            <p className="feature-card__desc">
              Lightweight games that run smoothly on any device, anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="cta-section">
        <div className="cta-box fade-in">
          <h2 className="cta-title neon-glow">
            Ready to Play?
          </h2>
          <p className="cta-desc">
            Explore our full collection on Google Play Store and find your next favorite puzzle.
          </p>
          <a
            href={studioInfo.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Visit Google Play →
          </a>
        </div>
      </section>
    </>
  );
}
