import GameCard from '@/components/GameCard';
import ScrambleText from '@/components/ScrambleText';
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
            <ScrambleText text="The Under Cats" />
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
          <span className="section-badge">🎯 The Loot</span>
          <h2 className="section-title">High-Value Targets</h2>
          <p className="section-desc">
            Classified files of the puzzles we've cracked. Your mission is to solve them.
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
          <span className="section-badge">🥷 Modus Operandi</span>
          <h2 className="section-title">Our Criminal Record</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card fade-in delay-1">
            <span className="feature-card__icon">🧠</span>
            <h3 className="feature-card__title">Brain Heists</h3>
            <p className="feature-card__desc">
              Every puzzle is a vault waiting to be picked. We steal your boredom, you unlock logic.
            </p>
          </div>
          <div className="feature-card fade-in delay-2">
            <span className="feature-card__icon">🕶️</span>
            <h3 className="feature-card__title">Stealth Art</h3>
            <p className="feature-card__desc">
              Sharp visuals, slick UI, and an atmosphere thicker than a smoke grenade.
            </p>
          </div>
          <div className="feature-card fade-in delay-3">
            <span className="feature-card__icon">🏃‍♂️</span>
            <h3 className="feature-card__title">Fast Getaway</h3>
            <p className="feature-card__desc">
              Lightweight games optimized to run smoothly so you can grab the loot and run.
            </p>
          </div>
        </div>
      </section>

      {/* ── Social Proof / Reviews ── */}
      <section className="reviews-section">
        <div className="section-header fade-in">
          <span className="section-badge">💬 Player Love</span>
          <h2 className="section-title">What Players Say</h2>
        </div>
        <div className="reviews-grid">
          <div className="review-card fade-in delay-1">
            <div className="review-card__stars">★★★★★</div>
            <p className="review-card__text">"Triple Meow is so addictive! The cats are adorable and the puzzles are just right — not too easy, not too hard."</p>
            <span className="review-card__author">— Player on Google Play</span>
          </div>
          <div className="review-card fade-in delay-2">
            <div className="review-card__stars">★★★★★</div>
            <p className="review-card__text">"Throw Master is hilarious! My kids and I can't stop laughing. Great physics puzzles with creative level design."</p>
            <span className="review-card__author">— Player on Google Play</span>
          </div>
          <div className="review-card fade-in delay-3">
            <div className="review-card__stars">★★★★☆</div>
            <p className="review-card__text">"Seeker is perfect for winding down. The scenes are beautifully detailed and finding objects is so satisfying."</p>
            <span className="review-card__author">— Player on Google Play</span>
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
