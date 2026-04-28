import GameCard from '@/components/GameCard';
import ScrambleText from '@/components/ScrambleText';
import MiniGame from '@/components/MiniGame';
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
          <h1 className="hero__title">
            <ScrambleText text="The Under Cats" />
          </h1>
        </a>
        <p className="hero__tagline fade-in delay-2">
          {studioInfo.tagline}
        </p>

        {/* Stats */}
        <div className="hero__stats fade-in delay-3">
          <div className="hero__stat">
            <span className="hero__stat-number">{games.length}</span>
            <span className="hero__stat-label">Games</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">100K+</span>
            <span className="hero__stat-label">Downloads</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">4.5★</span>
            <span className="hero__stat-label">Avg Rating</span>
          </div>
        </div>
      </section>

      {/* ── Games Section ── */}
      <main className="games-section">
        <div className="section-header fade-in delay-2">
          <span className="section-badge">📓 Our Diary</span>
          <h2 className="section-title">Latest Mischiefs</h2>
          <p className="section-desc">
            A scrapbook of all the fun, relaxing, and brain-teasing games we've built.
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
          <span className="section-badge">✏️ How We Play</span>
          <h2 className="section-title">What Makes Us Purr</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card fade-in delay-1">
            <span className="feature-card__icon">🧠</span>
            <h3 className="feature-card__title">Brain Teasers</h3>
            <p className="feature-card__desc">
              Every puzzle is a little adventure to stretch your mind and spark joy.
            </p>
          </div>
          <div className="feature-card fade-in delay-2">
            <span className="feature-card__icon">🎨</span>
            <h3 className="feature-card__title">Cozy Art</h3>
            <p className="feature-card__desc">
              Warm visuals, hand-drawn styles, and relaxing vibes to soothe your day.
            </p>
          </div>
          <div className="feature-card fade-in delay-3">
            <span className="feature-card__icon">🐈</span>
            <h3 className="feature-card__title">Smooth Play</h3>
            <p className="feature-card__desc">
              Lightweight games optimized to run smoothly so you can chill anytime, anywhere.
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

      {/* ── Mini Game Break ── */}
      <section className="minigame-section">
        <MiniGame />
      </section>

      {/* ── CTA Section ── */}
      <section className="cta-section">
        <div className="cta-box fade-in">
          <h2 className="cta-title">
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
