'use client';
import { useEffect, useState } from 'react';

export default function EasterEgg() {
  const [activated, setActivated] = useState(false);
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    // Konami Code: Up Up Down Down Left Right Left Right B A
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 
      'ArrowDown', 'ArrowDown', 
      'ArrowLeft', 'ArrowRight', 
      'ArrowLeft', 'ArrowRight', 
      'b', 'a'
    ];
    let position = 0;

    const handleKeyDown = (e) => {
      // Ignore if typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key.toLowerCase() === konamiCode[position].toLowerCase() || e.key === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
          triggerEasterEgg();
          position = 0;
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerEasterEgg = () => {
    if (activated) return;
    
    setActivated(true);
    setGlitch(true);
    
    // Play a retro sound if possible, or just visual
    try {
      const audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
      audio.volume = 0.2;
      audio.play().catch(e => console.log('Audio autoplay blocked'));
    } catch (e) {}

    // Add glitch effect to the whole body
    document.body.classList.add('easter-egg-glitch');
    
    // Stop glitch after a short burst
    setTimeout(() => {
      setGlitch(false);
    }, 1000);
    
    // Reset completely after 10s
    setTimeout(() => {
      document.body.classList.remove('easter-egg-glitch');
      setActivated(false);
    }, 10000);
  };

  if (!activated) return null;

  return (
    <div className={`easter-egg-overlay ${glitch ? 'glitch-active' : ''}`}>
      <div className="matrix-rain">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rain-drop" style={{ 
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 2}s`
          }}>
            MEOW 0101 MEOW
          </div>
        ))}
      </div>
      <div className="access-granted neon-glow--cyan">
        <h2>GOD MODE UNLOCKED</h2>
        <p>You found the secret catnip! 🐱</p>
      </div>
    </div>
  );
}
