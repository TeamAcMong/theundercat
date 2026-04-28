'use client';

import Link from 'next/link';

export default function GameCard({ game, index }) {
  return (
    <article className={`game-card fade-in delay-${index + 1}`}>
      <Link href={`/games/${game.slug}`} className="game-card__link">
        <div className="game-card__image-wrapper">
          <img
            src={game.image}
            alt={game.title}
            className="game-card__image"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/600x400/1E1C35/A78BFA?text=Coming+Soon';
            }}
          />
        </div>
        <div className="game-card__body">
          <h3 className="game-card__title">{game.title}</h3>
          {game.tagline && <p className="game-card__tagline">{game.tagline}</p>}
        </div>
      </Link>
      <div className="game-card__footer">
        <div className="game-card__stores">
          {game.androidUrl && (
            <a
              href={game.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Get on Google Play"
              className="store-badge"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get on Google Play"
                className="store-badge__img"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
