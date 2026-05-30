'use client';

interface HUDPanelProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
  label: string;
  value: string;
  fillPercentage: number;
  valueColor?: string;
}

export function HUDPanel({
  position,
  label,
  value,
  fillPercentage,
  valueColor = 'var(--cyan)',
}: HUDPanelProps) {
  const positionClasses = {
    tl: 'top-[90px] left-10',
    tr: 'top-[90px] right-10 text-right',
    bl: 'bottom-[60px] left-10',
    br: 'bottom-[60px] right-10 text-right',
  };

  const animationDelays = {
    tl: '0s',
    tr: '1.2s',
    bl: '2.4s',
    br: '0.8s',
  };

  return (
    <div
      className={`hud absolute ${positionClasses[position]} px-[18px] py-[14px] border border-cyan-500/15 bg-slate-900/70 backdrop-blur-lg font-mono text-xs text-cyan-700 ${position.includes('r') ? 'hud-tr' : ''} ${position.includes('b') ? 'hud-b' : ''}`}
      style={{
        animation: `float 5s ease-in-out infinite`,
        animationDelay: animationDelays[position],
      }}
    >
      <div className="hud-lbl text-[9px] tracking-wider mb-1">{label}</div>
      <div className="hud-val text-base font-bold mb-2" style={{ color: valueColor }}>
        {value}
      </div>
      <div className="hud-bar w-[90px] h-[1.5px] bg-cyan-500/10 relative overflow-hidden" style={{ marginLeft: position.includes('r') ? 'auto' : 0 }}>
        <div
          className="hud-fill h-full bg-cyan-500"
          style={{
            width: `${fillPercentage}%`,
            animation: 'fillbar 4s ease-in-out infinite alternate',
          }}
        />
      </div>
    </div>
  );
}

export default function Hologram() {
  return (
    <>
      <HUDPanel position="tl" label="NEURAL SYNC" value="98.7%" fillPercentage={98} />
      <HUDPanel position="tr" label="AUGMENTATION" value="ACTIVE" fillPercentage={72} />
      <HUDPanel position="bl" label="PARTICIPANTS" value="12,847" fillPercentage={58} />
      <HUDPanel
        position="br"
        label="STATUS"
        value="ONLINE"
        fillPercentage={100}
        valueColor="#00ff88"
      />
    </>
  );
}
