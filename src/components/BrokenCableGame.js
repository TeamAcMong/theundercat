'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BrokenCableGame() {
  const [clicks, setClicks] = useState(0);
  const router = useRouter();
  const maxClicks = 5;
  const isFixed = clicks >= maxClicks;

  useEffect(() => {
    if (isFixed) {
      // Auto redirect after 2.5s when fixed
      const timer = setTimeout(() => {
        router.push('/');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isFixed, router]);

  return (
    <div className="cable-game-container">
      <p className="game-status">
        {isFixed 
          ? "✅ Power Restored! Rerouting to Home..." 
          : "⚠️ A rogue cat chewed the server cable! CLICK TO TAPE IT!"}
      </p>

      <div 
        className={`cable-area ${isFixed ? 'fixed' : 'broken'}`}
        onClick={() => !isFixed && setClicks(c => c + 1)}
        title={!isFixed ? "Click to fix!" : ""}
      >
        {/* Left Cable */}
        <div className="cable-segment left-cable">
          <div className="copper-wire-right" />
        </div>

        {/* The Gap & Sparks & Tape */}
        <div className="cable-gap">
          {/* Sparks */}
          {!isFixed && (
            <div className="sparks">⚡</div>
          )}

          {/* Tape Layers based on clicks */}
          {clicks > 0 && (
            <div 
              className="electrical-tape" 
              style={{
                width: `${Math.min((clicks / maxClicks) * 120, 120)}%`,
                opacity: clicks / maxClicks,
              }} 
            />
          )}
        </div>

        {/* Right Cable */}
        <div className="cable-segment right-cable">
           <div className="copper-wire-left" />
        </div>

        {/* The mischievous cat SVG peeking */}
        <div className={`sneaky-cat ${isFixed ? 'run-away' : ''}`}>
          <svg width="60" height="60" viewBox="0 0 100 100">
            {/* Cat ears and head */}
            <path d="M 20 80 L 20 20 L 40 45 L 60 45 L 80 20 L 80 80 Z" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="35" cy="55" r="5" fill="var(--color-primary, #00ffcc)" className="cat-eye" />
            <circle cx="65" cy="55" r="5" fill="var(--color-primary, #00ffcc)" className="cat-eye" />
            {/* Nose */}
            <polygon points="45,65 55,65 50,70" fill="#ff4d4f" />
          </svg>
        </div>
      </div>

      {/* Progress Bar */}
      {!isFixed && (
        <div className="fix-progress-bar">
          <div className="fix-progress-fill" style={{ width: `${(clicks / maxClicks) * 100}%` }} />
        </div>
      )}

      <style jsx>{`
        .cable-game-container {
          position: relative;
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }

        .game-status {
          color: ${isFixed ? 'var(--color-primary, #00ffcc)' : 'var(--color-danger, #ff4d4f)'};
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          min-height: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s;
          text-shadow: ${isFixed ? '0 0 10px var(--color-primary)' : '0 0 10px var(--color-danger)'};
          animation: ${isFixed ? 'none' : 'pulse-text 1.5s infinite'};
        }

        .cable-area {
          display: flex;
          align-items: center;
          padding: 30px 20px;
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cable-area.broken {
          cursor: pointer;
          gap: 30px;
        }
        .cable-area.broken:hover {
          background: rgba(255,255,255,0.06);
          transform: scale(1.05);
        }
        .cable-area.broken:active {
          transform: scale(0.95);
        }

        .cable-area.fixed {
          cursor: default;
          gap: 0px;
          border-color: var(--color-primary, #00ffcc);
          box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
        }

        .cable-segment {
          width: 80px;
          height: 18px;
          background: #2a2a2a;
          position: relative;
          border: 2px solid #444;
          box-shadow: inset 0 3px 0 rgba(255,255,255,0.1), 0 5px 15px rgba(0,0,0,0.5);
        }

        .left-cable {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          border-right: none;
        }

        .right-cable {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border-left: none;
        }

        .copper-wire-right {
          position: absolute;
          right: -12px;
          top: 3px;
          width: 12px;
          height: 8px;
          background: #b87333;
          border-radius: 2px;
          border: 1px solid #8a5322;
        }

        .copper-wire-left {
          position: absolute;
          left: -12px;
          top: 3px;
          width: 12px;
          height: 8px;
          background: #b87333;
          border-radius: 2px;
          border: 1px solid #8a5322;
        }

        .cable-gap {
          position: relative;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cable-area.broken .cable-gap { width: 40px; }
        .cable-area.fixed .cable-gap { width: 10px; }

        .sparks {
          position: absolute;
          color: #ffeb3b;
          font-size: 28px;
          animation: sparkle 0.15s infinite alternate;
          text-shadow: 0 0 10px #ffeb3b, 0 0 20px #ffea00;
          pointer-events: none;
          z-index: 10;
        }

        .electrical-tape {
          position: absolute;
          height: 26px;
          background: #111;
          border: 2px solid #000;
          transform: rotate(-3deg);
          z-index: 5;
          transition: all 0.2s;
          border-radius: 3px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.5);
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 5px,
            rgba(255,255,255,0.05) 5px,
            rgba(255,255,255,0.05) 10px
          );
        }

        .sneaky-cat {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          animation: peek 4s infinite alternate ease-in-out;
          pointer-events: none;
          z-index: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sneaky-cat.run-away {
          top: 100px;
          opacity: 0;
          transform: translateX(-50%) scale(0.5);
        }

        .cat-eye {
          animation: blink 4s infinite;
          transform-origin: center;
        }

        .fix-progress-bar {
          margin-top: 2rem;
          width: 150px;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .fix-progress-fill {
          height: 100%;
          background: var(--color-primary, #00ffcc);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 10px var(--color-primary, #00ffcc);
        }

        @keyframes sparkle {
          0% { transform: scale(0.8) rotate(-15deg) translate(0, -5px); opacity: 0.5; }
          100% { transform: scale(1.3) rotate(15deg) translate(0, 5px); opacity: 1; }
        }
        
        @keyframes peek {
          0%, 10% { transform: translateX(-50%) translateY(15px); }
          40%, 60% { transform: translateX(-50%) translateY(0px); }
          90%, 100% { transform: translateX(-50%) translateY(10px); }
        }
        
        @keyframes blink {
          0%, 95%, 98% { transform: scaleY(1); }
          96%, 97% { transform: scaleY(0.1); }
        }

        @keyframes pulse-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
