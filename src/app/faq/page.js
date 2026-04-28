import Link from 'next/link';
import Accordion from '@/components/Accordion';
import { faqData } from '@/data/faq';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about The Under Cats games — gameplay, privacy, ads, and support.',
};

export default function FaqPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">FAQ</h1>
        <Link href="/" className="page-header__back fade-in delay-2">← Back to Home</Link>
      </header>

      <main className="page-main" style={{ maxWidth: '800px' }}>
        {faqData.map((section, i) => (
          <div key={section.category} className={`faq-section fade-in delay-${i + 2}`}>
            <h2 className="faq-section__title">{section.category}</h2>
            <Accordion items={section.items} />
          </div>
        ))}

        <div className="content-box fade-in" style={{ textAlign: 'center', marginTop: 'var(--sp-8)' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Didn&apos;t find your answer? <Link href="/contact" style={{ color: 'var(--secondary-light)' }}>Contact us</Link> and we&apos;ll help!
          </p>
        </div>
      </main>
    </>
  );
}
