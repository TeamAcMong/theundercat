'use client';

export default function GameCard({ game, index }) {
  return (
    <article className={`game-card fade-in-up stagger-${index + 1}`}>
      <img
        src={game.image}
        alt={game.title}
        className="game-card__image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/1a1a2e/FFFFFF?text=Image+Not+Found';
        }}
      />
      <div className="game-card__body">
        <h3 className="game-card__title">{game.title}</h3>
        <div className="game-card__stores">
          {game.androidUrl && (
            <a
              href={game.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Get on Google Play"
              className="store-badge"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Get on Google Play"
                className="store-badge__img"
              />
            </a>
          )}
          {game.iosUrl && (
            <a
              href={game.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Download on the App Store"
              className="store-badge"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                className="store-badge__img"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
