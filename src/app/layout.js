import { Orbitron, Play } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
  display: 'swap',
});

const play = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'The Under Cats — Puzzle Game Studio',
    template: '%s | The Under Cats',
  },
  description: 'Dive into a handpicked selection of brain-teasing puzzle games by The Under Cats. Test your wits, boost your logic skills, and have a blast!',
  metadataBase: new URL('https://theundercat.github.io'),
  openGraph: {
    title: 'The Under Cats — Puzzle Game Studio',
    description: 'Brain-teasing puzzle games crafted with love.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Under Cats',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Under Cats — Puzzle Game Studio',
    description: 'Brain-teasing puzzle games crafted with love.',
  },
  icons: {
    icon: 'https://play-lh.googleusercontent.com/2GPZQk20ItKUFiq6ljOWCD9-q6TD2IdBLWqezpGUWR3j_b_NxN0NlObSGhU5Xdr0UZ1c=s94-rw',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${play.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
