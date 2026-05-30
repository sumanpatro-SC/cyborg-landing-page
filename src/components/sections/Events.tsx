'use client';

const events = [
  {
    num: '01',
    title: 'Brain Interface',
    desc: 'Design brain-computer interfaces that push human cognition beyond biological limits.',
    tags: ['BCI', 'EEG', 'ML'],
    color: 'var(--cyan)',
  },
  {
    num: '02',
    title: 'Exoskeleton',
    desc: 'Prototype robotic exoskeletons that enhance human physical capabilities to superhuman levels.',
    tags: ['ROBOTICS', 'SERVO'],
    color: 'var(--amber)',
  },
  {
    num: '03',
    title: 'AR / VR Hack',
    desc: 'Build augmented reality overlays that merge digital information seamlessly with physical space.',
    tags: ['AR', 'VR', 'XR'],
    color: 'var(--pink)',
  },
  {
    num: '04',
    title: 'AI Consciousness',
    desc: 'Create AI systems that demonstrate emergent behavior, adaptive intelligence, and self-awareness.',
    tags: ['AI', 'LLM', 'RL'],
    color: '#a78bfa',
  },
  {
    num: '05',
    title: 'Biotech Lab',
    desc: 'Explore synthetic biology and digital systems converging to redefine what a human body can be.',
    tags: ['BIO', 'NANO'],
    color: '#34d399',
  },
  {
    num: '06',
    title: 'Defence Grid',
    desc: 'Protect cyborg systems from adversarial attacks. CTF-style cybersecurity challenge for elite teams.',
    tags: ['CTF', 'RED TEAM'],
    color: '#f87171',
  },
];

export default function Events() {
  return (
    <div id="events">
      <div className="section">
        <div className="sec-hd">
          <div className="sec-tag" style={{ animation: 'slideIn 0.6s ease 0.1s both' }}>
            /// AUGMENTATION MODULES ///
          </div>
          <h2 className="sec-title" style={{ animation: 'slideIn 0.6s ease 0.2s both' }}>
            Core Challenges
          </h2>
          <div className="sec-rule" style={{ animation: 'scaleUp 0.6s ease 0.3s both' }}>
            <div className="diamond" />
          </div>
        </div>

        <div className="cards">
          {events.map((event, i) => (
            <div
              key={i}
              className="card"
              style={{
                '--accent-color': event.color,
                animation: `fadeUp 0.6s ease ${i * 0.08}s both`,
              } as React.CSSProperties}
            >
              <div 
                className="card-accent" 
                style={{ 
                  background: event.color,
                  animation: `glowPulse 2s ease-in-out infinite`
                }} 
              />
              <div className="card-num">[&nbsp;{event.num}&nbsp;] NEURAL HACK</div>
              <div className="card-title">{event.title}</div>
              <div className="card-desc">{event.desc}</div>
              <div className="card-tags">
                {event.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="tag"
                    style={{
                      borderColor: event.color,
                      transition: `all 0.3s ease`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.color = event.color;
                      el.style.background = `${event.color}20`;
                      el.style.borderColor = event.color;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.color = 'var(--text2)';
                      el.style.background = 'rgba(0, 229, 200, 0.05)';
                      el.style.borderColor = 'var(--border)';
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-cta" style={{ color: event.color }}>
                ENTER MODULE →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
