'use client';

import Link from 'next/link';

export default function GameCard({ game, index }) {
  const handleMouseMove = (e) => {
    // Only apply on desktop
    if (window.matchMedia('(max-width: 768px)').matches) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-8 to 8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `
      ${-rotateY}px ${rotateX}px 20px rgba(124, 58, 237, 0.2),
      0 0 40px rgba(6, 182, 212, 0.1) inset
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.boxShadow = '';
  };

  return (
    <article 
      className={`game-card fade-in delay-${index + 1}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/games/${game.slug}`} className="game-card__link">
        <div className="game-card__stamp">CONFIDENTIAL</div>
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
