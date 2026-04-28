import Header from '@/components/Header';
import GameCard from '@/components/GameCard';
import { games } from '@/data/games';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <section className="game-grid">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </section>
      </main>
    </>
  );
}
