import Header from '@/components/Header';
import { studioInfo } from '@/data/games';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for The Under Cats games and services.',
};

export default function TermsPage() {
  return (
    <>
      <Header compact title="Terms & Conditions" />
      <main className="page-main page-main--narrow">
        <div className="content-box">
          <p className="effective-date">
            <strong>Effective Date:</strong> 09/06/2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using our game or services, you agree to be bound
            by the following terms and conditions. If you do not agree with
            these terms, please do not use our service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            We own all rights to the content of the game, including images,
            sounds, source code, and related materials.
          </p>

          <h2>3. Prohibited Activities</h2>
          <p>
            We strictly prohibit cheating, fraud, or disrupting the system. Any
            violations may result in permanent account suspension.
          </p>

          <h2>4. Account Management and Security</h2>
          <p>
            You are responsible for protecting your account information. We are
            not liable for any losses due to lack of account security.
          </p>

          <h2>5. Privacy and Security</h2>
          <p>
            We are committed to protecting your privacy and comply with all data
            protection regulations. Please refer to our Privacy Policy for more
            details.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to change, modify, or update these terms at
            any time. Changes will take effect immediately upon being posted on
            this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms, please contact us
            at: <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>
          </p>

          <p className="closing-text">
            Thank you for reading and agreeing to our terms and conditions.
          </p>
        </div>
      </main>
    </>
  );
}
