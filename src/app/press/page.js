import Link from 'next/link';
import { studioInfo, games } from '@/data/games';

export const metadata = {
  title: 'Press Kit',
  description: 'Press kit for The Under Cats — studio info, logos, screenshots, and brand assets for media coverage.',
};

export default function PressPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Press Kit</h1>
        <Link href="/" className="page-header__back fade-in delay-2">← Back to Home</Link>
      </header>

      <main className="page-main" style={{ maxWidth: '800px' }}>
        {/* Fact Sheet */}
        <div className="content-box fade-in delay-2">
          <h2>Fact Sheet</h2>
          <div className="press-facts">
            <div className="press-fact"><strong>Studio:</strong> {studioInfo.name}</div>
            <div className="press-fact"><strong>Founded:</strong> {studioInfo.founded}</div>
            <div className="press-fact"><strong>Location:</strong> {studioInfo.location}</div>
            <div className="press-fact"><strong>Total Downloads:</strong> {studioInfo.totalDownloads}</div>
            <div className="press-fact"><strong>Games Released:</strong> {games.length}</div>
            <div className="press-fact"><strong>Platform:</strong> Android (Google Play)</div>
            <div className="press-fact"><strong>Genre:</strong> Puzzle, Casual</div>
            <div className="press-fact"><strong>Contact:</strong> <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a></div>
          </div>
        </div>

        {/* About */}
        <div className="content-box fade-in delay-3" style={{ marginTop: 'var(--sp-6)' }}>
          <h2>About The Studio</h2>
          <p>The Under Cats is an independent game studio specializing in brain-teasing puzzle games. We believe games should be both challenging and delightful, combining clever puzzle design with charming art to create experiences that players love.</p>
        </div>

        {/* Games */}
        <div className="content-box fade-in delay-4" style={{ marginTop: 'var(--sp-6)' }}>
          <h2>Our Games</h2>
          <div className="press-games">
            {games.map((game) => (
              <div key={game.id} className="press-game">
                <img src={game.image} alt={game.title} className="press-game__img" />
                <div className="press-game__info">
                  <h3>{game.title}</h3>
                  <p>{game.tagline}</p>
                  <div className="press-game__meta">
                    <span>⭐ {game.rating}</span>
                    <span>📥 {game.downloads}</span>
                    <span>📅 {game.releaseDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="content-box fade-in delay-5" style={{ marginTop: 'var(--sp-6)' }}>
          <h2>Brand Colors</h2>
          <div className="press-colors">
            <div className="press-color" style={{ background: '#7C3AED' }}><span>Primary<br />#7C3AED</span></div>
            <div className="press-color" style={{ background: '#06B6D4' }}><span>Secondary<br />#06B6D4</span></div>
            <div className="press-color" style={{ background: '#F43F5E' }}><span>Accent<br />#F43F5E</span></div>
            <div className="press-color" style={{ background: '#0F0F23', border: '1px solid rgba(124,58,237,0.3)' }}><span>Background<br />#0F0F23</span></div>
          </div>
        </div>

        {/* Logo */}
        <div className="content-box fade-in delay-6" style={{ marginTop: 'var(--sp-6)', textAlign: 'center' }}>
          <h2>Studio Logo</h2>
          <img src={studioInfo.logo} alt="The Under Cats Logo" style={{ width: '120px', height: '120px', borderRadius: 'var(--radius-lg)', margin: 'var(--sp-4) auto', boxShadow: 'var(--shadow-glow-purple)' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>Right-click to save the logo image.</p>
        </div>
      </main>
    </>
  );
}
