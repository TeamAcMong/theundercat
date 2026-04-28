import Link from 'next/link';
import { studioInfo } from '@/data/games';

export const metadata = {
  title: 'About Us',
  description: 'Learn about The Under Cats — an indie puzzle game studio driven by creativity and a passion for brain-teasing experiences.',
};

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title neon-glow fade-in">About Us</h1>
        <Link href="/" className="page-header__back fade-in delay-2">
          ← Back to Home
        </Link>
      </header>

      <main className="page-main">
        <div className="content-box fade-in delay-3">
          <p>
            Welcome to <strong>The Under Cats</strong>, where creative ideas and
            a passion for puzzle games come to life.
          </p>

          <h2>Our Mission</h2>
          <p>
            We are an independent game studio with a simple goal: to create
            puzzle games that not only challenge the mind but also bring joy and
            relaxation. We believe every game is an adventure in thinking, and we
            strive to meticulously craft each product, from adorable graphics to
            captivating gameplay.
          </p>

          <h2>The Team</h2>
          <p>
            The Under Cats is home to developers, artists, and dreamers who
            share a love for two things: cats and challenging puzzles. We work
            with all our heart to turn unique ideas into interactive experiences
            you can enjoy anywhere.
          </p>

          <h2>Contact Us</h2>
          <p>
            We&apos;re always listening! For any feedback, questions, or just to say
            hello, please don&apos;t hesitate to email us at:{' '}
            <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>.
          </p>

          <p className="closing-text">
            Thank you for joining us on our journey at The Under Cats! 🐱
          </p>
        </div>
      </main>
    </>
  );
}
