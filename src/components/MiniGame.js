'use client';
import { useState, useEffect } from 'react';

const LEVELS = [
  { name: "Level 1: The Alibi", initialFish: 15, maxTake: 3 },
  { name: "Level 2: The Safehouse", initialFish: 18, maxTake: 4 },
  { name: "Level 3: The Laser Grid", initialFish: 13, maxTake: 2 },
  { name: "Level 4: The Mastermind", initialFish: 21, maxTake: 3 },
  { name: "Level 5: The Vault", initialFish: 25, maxTake: 4 },
  { name: "Level 6: The Getaway", initialFish: 10, maxTake: 3 },
];

export default function MiniGame() {
  const [currentLevel, setCurrentLevel] = useState(LEVELS[3]);
  const [fishCount, setFishCount] = useState(21);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Take 1, 2, or 3 fish. Don't take the last one!");
  const [aiThinking, setAiThinking] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pick a random level on mount
    resetGame();
    setMounted(true);
  }, []);

  const takeFish = (amount) => {
    if (gameOver || aiThinking || fishCount <= 0) return;
    
    const remaining = fishCount - amount;
    setFishCount(remaining);
    
    if (remaining <= 0) {
      setGameOver(true);
      setMessage("You took the last fish! THE CAT CAUGHT YOU! 😾");
      return;
    }

    setIsPlayerTurn(false);
    setMessage("Master Cat is thinking...");
    setAiThinking(true);
  };

  useEffect(() => {
    if (!isPlayerTurn && !gameOver && fishCount > 0) {
      const timer = setTimeout(() => {
        let take = 1;
        const targetRemainder = (fishCount - 1) % (currentLevel.maxTake + 1);
        
        if (targetRemainder === 0) {
          // AI is in a losing position (player has a chance to win!)
          take = Math.floor(Math.random() * currentLevel.maxTake) + 1;
          if (take >= fishCount) take = fishCount > 1 ? fishCount - 1 : 1;
        } else {
          // AI makes the perfect move
          take = targetRemainder;
        }

        const newCount = fishCount - take;
        setFishCount(newCount);
        
        if (newCount <= 0) {
          setGameOver(true);
          setMessage("Master Cat took the last fish! YOU SURVIVED! 🙀🎉");
        } else {
          setIsPlayerTurn(true);
          setMessage(`Cat took ${take} fish. Your turn! (Max: ${currentLevel.maxTake})`);
        }
        setAiThinking(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, fishCount, gameOver, currentLevel]);

  const resetGame = () => {
    const randomLevel = LEVELS[Math.floor(Math.random() * LEVELS.length)];
    setCurrentLevel(randomLevel);
    setFishCount(randomLevel.initialFish);
    setIsPlayerTurn(true);
    setGameOver(false);
    setMessage(`Take 1 to ${randomLevel.maxTake} fish. Don't take the last one!`);
    setAiThinking(false);
  };

  if (!mounted) return <div className="minigame-container fade-in" style={{ minHeight: '300px' }}>Loading...</div>;

  // Render fish
  const renderFish = () => {
    const fishArray = [];
    for (let i = 0; i < fishCount; i++) {
      fishArray.push(<span key={i} className="nim-fish">🐟</span>);
    }
    return fishArray;
  };

  // Render buttons dynamically based on maxTake
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= currentLevel.maxTake; i++) {
      buttons.push(
        <button 
          key={i}
          className="minigame-reset" 
          onClick={() => takeFish(i)}
          disabled={!isPlayerTurn || gameOver || fishCount < i}
        >
          Take {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="minigame-container fade-in">
      <h3 className="minigame-title">{currentLevel.name}</h3>
      
      <div className="minigame-status" style={{ minHeight: '48px' }}>
        {message}
      </div>

      <div className="nim-board">
        <div className="nim-fish-container">
          {renderFish()}
        </div>
        <div className="nim-count">{fishCount} fish left</div>
      </div>

      <div className="nim-controls" style={{ flexWrap: 'wrap' }}>
        {renderButtons()}
      </div>

      {gameOver && (
        <button className="minigame-reset" style={{ marginTop: 'var(--sp-4)', width: '100%', borderColor: 'var(--accent)', color: 'var(--accent)' }} onClick={resetGame}>
          Next Random Level
        </button>
      )}
    </div>
  );
}
