import Link from 'next/link';
import { studioInfo } from '@/data/games';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Under Cats team. We love hearing from our players!',
};

export default function ContactPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Contact Us</h1>
        <Link href="/" className="page-header__back fade-in delay-2">← Back to Home</Link>
      </header>

      <main className="page-main" style={{ maxWidth: '700px' }}>
        <div className="content-box fade-in delay-3" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)' }}>
            We&apos;d love to hear from you! Whether it&apos;s feedback, bug reports, partnership inquiries, or just a friendly hello — don&apos;t hesitate to reach out.
          </p>

          <div className="contact-grid">
            <a href={`mailto:${studioInfo.email}`} className="contact-card fade-in delay-4">
              <span className="contact-card__icon">✉️</span>
              <h3 className="contact-card__title">Email Us</h3>
              <p className="contact-card__value">{studioInfo.email}</p>
              <p className="contact-card__note">We reply within 48 hours</p>
            </a>

            <a href={studioInfo.playStoreUrl} target="_blank" rel="noopener noreferrer" className="contact-card fade-in delay-5">
              <span className="contact-card__icon">🎮</span>
              <h3 className="contact-card__title">Google Play</h3>
              <p className="contact-card__value">Visit our store page</p>
              <p className="contact-card__note">Rate & review our games</p>
            </a>
          </div>

          <div style={{ marginTop: 'var(--sp-8)', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            <p>Before reaching out, you might find your answer in our <Link href="/faq" style={{ color: 'var(--secondary-light)' }}>FAQ page</Link>.</p>
          </div>
        </div>
      </main>
    </>
  );
}
