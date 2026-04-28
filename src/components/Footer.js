import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="nav-links">
        <Link href="/about" className="nav-link">About Us</Link>
        <span className="nav-divider">|</span>
        <Link href="/terms" className="nav-link">Terms &amp; Conditions</Link>
        <span className="nav-divider">|</span>
        <Link href="/privacy-policy" className="nav-link">Privacy Policy</Link>
      </nav>
      <p className="site-footer__copy">
        &copy; {new Date().getFullYear()} The Under Cats. All games are the property of their respective owners.
      </p>
    </footer>
  );
}
