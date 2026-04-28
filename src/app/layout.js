import { Caveat, Nunito, Orbitron, JetBrains_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import CursorGlow from '@/components/CursorGlow';
import EasterEgg from '@/components/EasterEgg';
import CctvHud from '@/components/CctvHud';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-diary-display',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-diary-body',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-heist-display',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heist-body',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'The Under Cats — Indie Puzzle Game Studio',
    template: '%s | The Under Cats',
  },
  description: 'Dive into brain-teasing puzzle games crafted by The Under Cats. Challenge your wits, boost your logic, and have a blast with our handpicked collection!',
  metadataBase: new URL('https://teamacmong.github.io/theundercat'),
  openGraph: {
    title: 'The Under Cats — Indie Puzzle Game Studio',
    description: 'Brain-teasing puzzle games crafted with love by indie developers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Under Cats',
    images: [
      {
        url: 'https://play-lh.googleusercontent.com/2GPZQk20ItKUFiq6ljOWCD9-q6TD2IdBLWqezpGUWR3j_b_NxN0NlObSGhU5Xdr0UZ1c=s1024',
        width: 1024,
        height: 1024,
        alt: 'The Under Cats Studio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Under Cats — Indie Puzzle Game Studio',
    description: 'Brain-teasing puzzle games crafted with love.',
    images: ['https://play-lh.googleusercontent.com/2GPZQk20ItKUFiq6ljOWCD9-q6TD2IdBLWqezpGUWR3j_b_NxN0NlObSGhU5Xdr0UZ1c=s1024'],
  },
  icons: {
    icon: 'https://play-lh.googleusercontent.com/2GPZQk20ItKUFiq6ljOWCD9-q6TD2IdBLWqezpGUWR3j_b_NxN0NlObSGhU5Xdr0UZ1c=s94-rw',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable} ${nunito.variable} ${orbitron.variable} ${jetbrains.variable}`}>
      <body className="theme-diary notebook-paper">
        <ThemeProvider>
          {/* Ambient Effects */}
          <EasterEgg />
          <CctvHud />
          <div className="bg-gradient-animated" aria-hidden="true" />
          <div className="grid-pattern" aria-hidden="true" />
          
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
