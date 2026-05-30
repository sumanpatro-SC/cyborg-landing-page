'use client';

export default function GlitchEffect() {
  return (
    <h1
      className="hero-title"
      data-t="CYBORG"
      style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(52px, 9vw, 100px)',
        fontWeight: 900,
        color: '#fff',
        letterSpacing: '8px',
        position: 'relative',
        lineHeight: 1,
        animation: 'rgb-drift 5s infinite',
      }}
    >
      CYBORG
    </h1>
  );
}
