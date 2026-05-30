'use client';

const timelineEvents = [
  {
    day: 'DAY 0 · BOOT',
    name: 'Registration & Orientation',
    desc: 'System initialization. Augmentation kits distributed. Teams formed and mission briefing begins.',
    color: 'var(--cyan)',
    animate: false,
  },
  {
    day: 'DAY 1 · UPLOAD',
    name: 'Workshops & Seminars',
    desc: 'Neural uplink sessions with industry leaders on the cutting edge of human augmentation.',
    color: 'var(--amber)',
    animate: false,
  },
  {
    day: 'DAY 2 · EXECUTE',
    name: '24-Hour Hackathon',
    desc: 'Build, prototype, and deploy. Maximum output mode engaged. Coffee and circuits provided.',
    color: 'var(--pink)',
    animate: false,
  },
  {
    day: 'DAY 3 · TRANSCEND',
    name: 'Grand Finale & Awards',
    desc: 'Final presentations. Champions ascend. The most augmented minds claim their legacy.',
    color: '#a78bfa',
    animate: true,
  },
];

export default function Timeline() {
  return (
    <div
      id="timeline"
      style={{ background: 'rgba(6,13,24,0.4)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="section">
        <div className="sec-hd">
          <div className="sec-tag">/// EVENT SEQUENCE ///</div>
          <h2 className="sec-title">Mission Timeline</h2>
          <div className="sec-rule">
            <div className="diamond" />
          </div>
        </div>

        <div className="tl">
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className={`tl-row ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeUp 0.6s ease ${i * 0.07}s both`,
              }}
            >
              <div className="tl-card">
                <div className="tl-day" style={{ color: event.color }}>
                  {event.day}
                </div>
                <div className="tl-name">{event.name}</div>
                <div className="tl-desc">{event.desc}</div>
              </div>
              <div
                className="tl-node"
                style={{
                  background: event.color,
                  ...(event.animate && {
                    animation: 'node-diamond 1s infinite',
                  }),
                }}
              />
              <div className="tl-spacer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
