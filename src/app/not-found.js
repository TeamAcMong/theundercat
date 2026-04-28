import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <main style={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 1rem',
    }}>
      <h1 className="neon-glow fade-in" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(5rem, 15vw, 10rem)',
        fontWeight: 900,
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
      }}>
        404
      </h1>
      <p className="fade-in delay-2" style={{
        fontSize: '1.125rem',
        color: 'var(--text-muted)',
        marginBottom: '2rem',
        maxWidth: '400px',
      }}>
        Oops! This page wandered off like a curious cat. 🐱
      </p>
      <Link
        href="/"
        className="cta-button fade-in delay-3"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
