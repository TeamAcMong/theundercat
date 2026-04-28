import Link from 'next/link';
import { studioInfo } from '@/data/games';

export default function Header({ compact = false }) {
  return (
    <header className={`site-header ${compact ? 'site-header--compact' : ''}`}>
      <h1 className="site-title">
        <Link
          href="/"
          className="site-title-link"
          title={studioInfo.name}
        >
          <img
            src={studioInfo.logo}
            alt="Logo"
            className="site-logo"
          />
          <span className="neon-glow">{studioInfo.name}</span>
        </Link>
      </h1>
      {!compact && (
        <p className="site-subtitle">{studioInfo.tagline}</p>
      )}
    </header>
  );
}
