import Link from 'next/link';
import { changelogData } from '@/data/changelog';

export const metadata = {
  title: 'Changelog',
  description: 'Update history for all The Under Cats games — new features, bug fixes, and improvements.',
};

const typeEmoji = { feature: '✨', fix: '🐛', improve: '🎨' };
const typeLabel = { feature: 'New', fix: 'Fix', improve: 'Improved' };

export default function ChangelogPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Changelog</h1>
        <Link href="/" className="page-header__back fade-in delay-2">← Back to Home</Link>
      </header>

      <main className="page-main" style={{ maxWidth: '800px' }}>
        {changelogData.map((game, gi) => (
          <div key={game.slug} className={`changelog-game fade-in delay-${gi + 2}`}>
            <h2 className="changelog-game__title">
              <Link href={`/games/${game.slug}`}>{game.game}</Link>
            </h2>

            <div className="changelog-timeline">
              {game.versions.map((ver) => (
                <div key={ver.version} className="changelog-version">
                  <div className="changelog-version__header">
                    <span className="changelog-version__tag">v{ver.version}</span>
                    <span className="changelog-version__date">{ver.date}</span>
                  </div>
                  <ul className="changelog-version__list">
                    {ver.changes.map((change, ci) => (
                      <li key={ci} className={`changelog-change changelog-change--${change.type}`}>
                        <span className="changelog-change__badge">
                          {typeEmoji[change.type]} {typeLabel[change.type]}
                        </span>
                        {change.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
