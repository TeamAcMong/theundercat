import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <main className="page-main" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <h1 className="neon-glow" style={{ fontSize: '5rem', marginBottom: '1rem' }}>
        404
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-body)', marginBottom: '2rem' }}>
        Oops! This page wandered off like a curious cat.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg-primary)',
          borderRadius: 'var(--radius-lg)',
          fontWeight: 700,
          transition: 'opacity 0.3s ease',
        }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
