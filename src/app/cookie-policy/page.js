import Link from 'next/link';
import { studioInfo } from '@/data/games';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for The Under Cats — learn how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">Cookie Policy</h1>
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
            This Cookie Policy explains how <strong>The Under Cats</strong> uses
            cookies and similar technologies when you visit our website or use
            our games.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help us recognize your device and remember information
            about your visit, such as your preferences and settings.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly.
            They enable basic features like page navigation and access to secure
            areas of the website.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies (such as Google Analytics) to understand
            how visitors interact with our website. This helps us improve our
            content and user experience.
          </p>

          <h3>Advertising Cookies</h3>
          <p>
            These cookies are used to deliver relevant advertisements through
            services like Google AdMob and AdSense. They may track your browsing
            activity across different websites.
          </p>

          <h3>Preference Cookies</h3>
          <p>
            These cookies remember your preferences and settings, such as theme
            selection or language preferences, to provide a more personalized
            experience.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our
            pages, including:
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Google AdMob</li>
            <li>Google AdSense</li>
            <li>Google Firebase</li>
          </ul>
          <p>
            These third parties have their own privacy policies. You can learn
            more at:{' '}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Cookie Policy
            </a>
          </p>

          <h2>4. How to Control Cookies</h2>
          <p>
            You can control and manage cookies in various ways:
          </p>
          <ul>
            <li>
              <strong>Browser Settings:</strong> Most browsers allow you to
              refuse or accept cookies through their settings. Check your
              browser&apos;s help section for instructions.
            </li>
            <li>
              <strong>Opt-Out Tools:</strong> You can opt out of personalized
              advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              <strong>Mobile Devices:</strong> On mobile devices, you can
              adjust ad tracking settings in your device&apos;s privacy settings.
            </li>
          </ul>
          <p>
            Please note that blocking certain cookies may affect the
            functionality of our website or games.
          </p>

          <h2>5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or for legal reasons. Any updates will be
            posted on this page with a new effective date.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact
            us at: <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>
          </p>

          <p className="closing-text">
            Thank you for taking the time to understand how we use cookies! 🍪
          </p>
        </div>
      </main>
    </>
  );
}
