'use client';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function CctvHud() {
  const { theme } = useTheme();
  const [timeStr, setTimeStr] = useState('');

  const [uvMode, setUvMode] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: HH:MM:SS:MS
      const ms = String(now.getMilliseconds()).padStart(3, '0').slice(0, 2);
      setTimeStr(`${now.toLocaleTimeString('en-US', { hour12: false })}:${ms}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 47); // fast update for milliseconds
    
    return () => clearInterval(interval);
  }, []);

  const toggleUvMode = () => {
    setUvMode(!uvMode);
    if (!uvMode) {
      document.body.classList.add('uv-mode-active');
    } else {
      document.body.classList.remove('uv-mode-active');
    }
  };

  if (theme !== 'heist') return null;

  return (
    <>
      <div className="cctv-hud" aria-hidden="true">
        <div className="cctv-bottom-left">
          <div className="cctv-rec"><span className="cctv-dot"></span> REC</div>
        </div>
        <div className="cctv-bottom-center" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            className={`uv-toggle ${uvMode ? 'uv-active' : ''}`}
            onClick={toggleUvMode}
            style={{ pointerEvents: 'auto' }}
            title="Toggle UV Flashlight"
          >
            {uvMode ? '🟣 UV: ON' : '🔦 UV: OFF'}
          </button>
        </div>
        <div className="cctv-bottom-right">
          <div className="cctv-time">{timeStr}</div>
        </div>
      </div>

      {/* Hidden Clues that only appear under UV Light (hover) */}
      <div className="uv-clue" style={{ top: '15%', left: '10%', fontSize: '2.5rem', transform: 'rotate(-15deg)' }}>
        🐾 M.C. WAS HERE
      </div>
      <div className="uv-clue" style={{ top: '65%', right: '8%', fontSize: '1.5rem', transform: 'rotate(8deg)' }}>
        VAULT CODE: 7355608
      </div>
      <div className="uv-clue" style={{ bottom: '20%', left: '25%', fontSize: '1.2rem', transform: 'rotate(-5deg)' }}>
        DON'T TRUST THE DOGS...
      </div>
      
      {/* New Clues */}
      <div className="uv-clue" style={{ top: '30%', right: '15%', fontSize: '2rem', transform: 'rotate(12deg)' }}>
        FOLLOW THE LASERS 🎯
      </div>
      <div className="uv-clue" style={{ top: '50%', left: '5%', fontSize: '1.8rem', transform: 'rotate(-90deg)' }}>
        🐾 🐾 🐾
      </div>
      <div className="uv-clue" style={{ bottom: '10%', right: '35%', fontSize: '1rem', transform: 'rotate(3deg)' }}>
        SECURITY BREACH AT 03:00 AM
      </div>
      <div className="uv-clue" style={{ top: '5%', left: '45%', fontSize: '1.3rem', transform: 'rotate(180deg)' }}>
        MEOW!
      </div>
    </>
  );
}
