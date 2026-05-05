import Link from 'next/link';
import { studioInfo } from '@/data/games';

export const metadata = {
  title: 'Policy',
  description: 'Policies for The Under Cats — our commitment to transparency and user protection.',
};

export default function PolicyPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Policy</h1>
        <Link href="/" className="page-header__back fade-in delay-2">
          ← Back to Home
        </Link>
      </header>

      <main className="page-main">
        <div className="content-box fade-in delay-3">
          <p className="effective-date">
            <strong>Effective Date:</strong> 05/05/2026
          </p>

          <p>
            At <strong>The Under Cats</strong>, we are committed to providing a
            safe, transparent, and enjoyable experience for all our users. This
            page outlines our key policies and guidelines.
          </p>

          <h2>1. User Conduct</h2>
          <p>
            We expect all users to engage with our games and services in a
            respectful and fair manner. Prohibited activities include:
          </p>
          <ul>
            <li>Cheating, hacking, or exploiting game mechanics</li>
            <li>Harassment or abusive behavior toward other users</li>
            <li>Attempting to disrupt or damage our services</li>
            <li>Sharing inappropriate or offensive content</li>
          </ul>
          <p>
            Violations may result in account suspension or permanent ban.
          </p>

          <h2>2. Content Ownership</h2>
          <p>
            All content within our games, including graphics, audio, code, and
            game mechanics, is the intellectual property of The Under Cats. Users
            may not copy, modify, distribute, or create derivative works without
            explicit permission.
          </p>

          <h2>3. In-Game Purchases</h2>
          <p>
            Some of our games may offer in-game purchases. All purchases are
            final and non-refundable unless required by law. Please review your
            purchase carefully before completing the transaction.
          </p>

          <h2>4. Data Collection and Privacy</h2>
          <p>
            We collect certain data to improve our games and provide relevant
            advertisements. This includes device information, usage data, and
            analytics. For detailed information, please refer to our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website and games use cookies and similar technologies for
            analytics and advertising purposes. These may include:
          </p>
          <ul>
            <li>Google Analytics for usage tracking</li>
            <li>Google AdMob for personalized advertisements</li>
            <li>Firebase for performance monitoring</li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings or
            device privacy settings.
          </p>

          <h2>6. Age Restrictions</h2>
          <p>
            Our games are designed for general audiences. However, we do not
            knowingly collect personal information from children under 13. If we
            discover such data has been collected, it will be deleted immediately.
          </p>

          <h2>7. Service Availability</h2>
          <p>
            We strive to maintain continuous service availability, but we cannot
            guarantee uninterrupted access. We reserve the right to modify,
            suspend, or discontinue any aspect of our games or services at any
            time without prior notice.
          </p>

          <h2>8. Updates and Changes</h2>
          <p>
            We may update these policies from time to time to reflect changes in
            our practices or legal requirements. Continued use of our services
            after changes are posted constitutes acceptance of the updated
            policies.
          </p>

          <h2>9. Dispute Resolution</h2>
          <p>
            If you have any concerns or disputes regarding our services, please
            contact us first so we can work toward a resolution. We are committed
            to addressing user concerns fairly and promptly.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions, concerns, or feedback regarding these policies, please
            reach out to us at:{' '}
            <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>
          </p>

          <p className="closing-text">
            Thank you for being part of The Under Cats community! 🐱
          </p>
        </div>
      </main>
    </>
  );
}
