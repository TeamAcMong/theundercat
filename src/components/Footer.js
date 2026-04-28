import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <Link href="/about" className="footer-link">About</Link>
        <span className="footer-divider">·</span>
        <Link href="/blog" className="footer-link">Blog</Link>
        <span className="footer-divider">·</span>
        <Link href="/faq" className="footer-link">FAQ</Link>
        <span className="footer-divider">·</span>
        <Link href="/contact" className="footer-link">Contact</Link>
        <span className="footer-divider">·</span>
        <Link href="/press" className="footer-link">Press</Link>
        <span className="footer-divider">·</span>
        <Link href="/changelog" className="footer-link">Changelog</Link>
      </nav>
      <nav className="footer-nav" style={{ marginBottom: 'var(--sp-4)', opacity: 0.5 }}>
        <Link href="/terms" className="footer-link">Terms</Link>
        <span className="footer-divider">·</span>
        <Link href="/privacy-policy" className="footer-link">Privacy</Link>
      </nav>
      <p className="footer-copy">
        © {new Date().getFullYear()} The Under Cats. All games are the property of their respective owners.
      </p>
      
    </footer>
  );
}
