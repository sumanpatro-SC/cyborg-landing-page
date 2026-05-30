'use client';

import { useEffect, useState } from 'react';
import EnergyCore from '@/components/effects/EnergyCore';
import DNAHelix from '@/components/effects/DNAHelix';
import Hologram from '@/components/effects/Hologram';
import GlitchEffect from '@/components/effects/GlitchEffect';

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 24,
    hours: 17,
    minutes: 43,
    seconds: 9,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = new Date(Date.now() + 864e5 * 24 + 36e5 * 17 + 6e4 * 43 + 9e3);

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target.getTime() - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const d = Math.floor(diff / 864e5);
      const h = Math.floor((diff % 864e5) / 36e5);
      const m = Math.floor((diff % 36e5) / 6e4);
      const s = Math.floor((diff % 6e4) / 1e3);

      setCountdown({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-10 pt-[60px]"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* HUD Panels */}
      <Hologram />

      {/* DNA Helixes */}
      <DNAHelix position="right" />
      <DNAHelix position="left" />

      {/* Energy Core with Eye */}
      <EnergyCore />

      {/* Hero Text Content */}
      <div className="hero-inner relative z-10">
        <div
          className="hero-eyebrow"
          style={{
            animation: 'slideIn 0.8s ease 0.2s both',
          }}
        >
          /// IIT BOMBAY TECHFEST 2025 ///
        </div>

        <GlitchEffect />

        <div
          className="hero-sub"
          style={{
            animation: 'slideInRight 0.8s ease 0.4s both',
          }}
        >
          PROTOCOL
        </div>

        <div
          className="hero-line"
          style={{
            animation: 'scaleUp 0.8s ease 0.55s both',
          }}
        >
          <div className="hero-tagline">HUMAN &nbsp;·&nbsp; MACHINE &nbsp;·&nbsp; EVOLVED</div>
        </div>

        {/* Countdown */}
        <div
          className="countdown"
          style={{
            animation: 'bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.65s both',
          }}
        >
          <div className="cd">
            <div className="cd-n">{pad(countdown.days)}</div>
            <div className="cd-l">DAYS</div>
          </div>
          <div className="cd">
            <div className="cd-n">{pad(countdown.hours)}</div>
            <div className="cd-l">HRS</div>
          </div>
          <div className="cd">
            <div className="cd-n">{pad(countdown.minutes)}</div>
            <div className="cd-l">MIN</div>
          </div>
          <div className="cd">
            <div className="cd-n" style={{ color: 'var(--cyan)' }}>
              {pad(countdown.seconds)}
            </div>
            <div className="cd-l">SEC</div>
          </div>
        </div>

        {/* Buttons */}
        <div
          className="btns"
          style={{
            animation: 'fadeUp 0.8s ease 0.85s both',
          }}
        >
          <button className="btn-p">INITIALIZE &gt;&gt;</button>
          <button className="btn-s">LEARN MORE</button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div />
      </div>
    </section>
  );
}
