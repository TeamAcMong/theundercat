'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/press', label: 'Press' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__inner">
        {/* Logo */}
        <Link href="/" className="navbar__brand">
          <img
            src="https://play-lh.googleusercontent.com/2GPZQk20ItKUFiq6ljOWCD9-q6TD2IdBLWqezpGUWR3j_b_NxN0NlObSGhU5Xdr0UZ1c=s94-rw"
            alt="The Under Cats"
            className="navbar__logo"
          />
          <span className="navbar__name">The Under Cats</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://play.google.com/store/apps/dev?id=5609148763993571299"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
            >
              Play Store ↗
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="navbar__mobile" onClick={(e) => e.stopPropagation()}>
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <li key={link.href} style={{ animationDelay: `${i * 0.05}s` }}>
                  <Link
                    href={link.href}
                    className={`navbar__mobile-link ${pathname === link.href ? 'navbar__mobile-link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ animationDelay: `${navLinks.length * 0.05}s` }}>
                <a
                  href="https://play.google.com/store/apps/dev?id=5609148763993571299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__cta navbar__cta--mobile"
                >
                  Play Store ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
