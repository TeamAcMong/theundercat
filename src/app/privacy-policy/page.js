import Link from 'next/link';
import { studioInfo } from '@/data/games';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for The Under Cats games — learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Privacy Policy</h1>
        <Link href="/" className="page-header__back fade-in delay-2">
          ← Back to Home
        </Link>
      </header>

      <main className="page-main">
        <div className="content-box fade-in delay-3">
          <p className="effective-date">
            <strong>Effective Date:</strong> 09/06/2025
          </p>

          <p>
            This Privacy Policy explains how we collect, use, and protect your
            data when you use our game <strong>Triple Meow Meow Tile Match</strong>.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <strong>Device Information:</strong> Device type, OS, and
              identifiers (for ads and analytics).
            </li>
            <li>
              <strong>Usage Data:</strong> In-game interactions, crashes, time
              played, etc.
            </li>
            <li>
              <strong>Ad Data:</strong> Collected by Google AdMob/AdSense SDK
              for ad performance.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Improve gameplay experience and performance.</li>
            <li>Show relevant ads via Google AdMob.</li>
            <li>Analyze usage via Google Firebase or Google Analytics.</li>
          </ul>

          <h2>3. Third-Party Services</h2>
          <p>Our game may use services like:</p>
          <ul>
            <li>Google AdMob</li>
            <li>Google Firebase Analytics</li>
            <li>Google Play Services</li>
          </ul>
          <p>
            View their policy:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </p>

          <h2>4. Children&apos;s Privacy</h2>
          <p>
            We do not knowingly collect personal data from children under 13. If
            discovered, such data will be deleted immediately.
          </p>

          <h2>5. Your Consent</h2>
          <p>By using our game, you consent to this policy.</p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this policy and will reflect any changes here.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions, please contact us at:{' '}
            <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>
          </p>
        </div>
      </main>
    </>
  );
}
