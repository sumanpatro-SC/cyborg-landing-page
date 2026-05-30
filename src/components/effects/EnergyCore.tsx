'use client';

import { useEffect, useRef, useState } from 'react';

export default function EnergyCore() {
  const pupilRef = useRef<HTMLDivElement>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const eye = document.getElementById('eye-wrap');
      if (!eye) return;

      const rect = eye.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const d = Math.hypot(dx, dy);
      const max = 9;

      const nx = d > max ? (dx / d) * max : dx;
      const ny = d > max ? (dy / d) * max : dy;

      setPupilPos({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="core" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
      {/* Spinning rings */}
      <div className="r1 ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] rounded-full border border-cyan-500/10" style={{ animation: 'spin 10s linear infinite' }} />
      <div className="r2 ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-amber-600/10" style={{ animation: 'spin 15s linear reverse infinite' }} />
      <div className="r3 ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[170px] h-[170px] rounded-full border border-pink-500/10" style={{ animation: 'spin 7s linear infinite' }} />

      {/* Core glow */}
      <div className="core-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-gradient-to-r from-cyan-500/22 via-cyan-500/04 to-transparent animate-pulse" />

      {/* Eye */}
      <div id="eye-wrap" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="eye-ring w-[74px] h-[74px] rounded-full border-[1.5px] border-cyan-400 flex items-center justify-center relative animate-[eye-glow_4s_ease-in-out_infinite]">
          <div className="iris w-[42px] h-[42px] rounded-full border border-cyan-400/50 flex items-center justify-center relative overflow-hidden">
            <div className="scan absolute w-full h-px bg-cyan-400/50 top-0 animate-[scan_2s_ease-in-out_infinite]" />
            <div
              ref={pupilRef}
              className="pupil w-4 h-4 rounded-full bg-gradient-to-br from-white via-cyan-400 to-slate-900 shadow-[0_0_10px_#00e5c8,0_0_20px_rgba(0,229,200,0.3)] transition-transform duration-[0.08s] ease-out relative z-10"
              style={{
                transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
