'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 px-12 py-0 h-[60px] flex items-center justify-between border-b border-cyan-500/15 bg-gradient-to-br from-slate-900/90 to-slate-900/70 backdrop-blur-3xl">
      <div 
        className="nav-logo flex items-center gap-2.5 font-orbitron text-base font-black text-white tracking-wide"
        style={{ animation: 'slideIn 0.6s ease 0.1s both' }}
      >
        <span 
          className="block w-0.5 h-[18px] bg-cyan-500 animate-blink"
          style={{ boxShadow: '0 0 10px var(--cyan)' }}
        />
        CYBORG
        <em className="font-normal text-cyan-500 text-[11px] tracking-wider not-italic font-mono">
          / TECHFEST
        </em>
      </div>

      <div className="nav-links flex gap-9">
        <a
          href="#events"
          className="font-mono text-xs tracking-wider text-cyan-700 hover:text-cyan-500 transition-all duration-300 relative group"
          style={{
            animation: 'slideIn 0.6s ease 0.2s both'
          }}
        >
          EVENTS
          <span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"
            style={{ 
              boxShadow: '0 0 10px rgba(0, 229, 200, 0.5)'
            }}
          />
        </a>
        <a
          href="#timeline"
          className="font-mono text-xs tracking-wider text-cyan-700 hover:text-cyan-500 transition-all duration-300 relative group"
          style={{
            animation: 'slideIn 0.6s ease 0.25s both'
          }}
        >
          TIMELINE
          <span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"
            style={{ 
              boxShadow: '0 0 10px rgba(0, 229, 200, 0.5)'
            }}
          />
        </a>
        <a
          href="#about"
          className="font-mono text-xs tracking-wider text-cyan-700 hover:text-cyan-500 transition-all duration-300 relative group"
          style={{
            animation: 'slideIn 0.6s ease 0.3s both'
          }}
        >
          ABOUT
          <span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"
            style={{ 
              boxShadow: '0 0 10px rgba(0, 229, 200, 0.5)'
            }}
          />
        </a>
        <a
          href="#register"
          className="font-mono text-xs tracking-wider text-cyan-700 hover:text-cyan-500 transition-all duration-300 relative group"
          style={{
            animation: 'slideIn 0.6s ease 0.35s both'
          }}
        >
          REGISTER
          <span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"
            style={{ 
              boxShadow: '0 0 10px rgba(0, 229, 200, 0.5)'
            }}
          />
        </a>
      </div>

      <button
        className="nav-btn px-6 py-2 border-2 border-cyan-500 text-cyan-500 font-mono text-xs tracking-wider transition-all duration-300 relative overflow-hidden group"
        style={{
          animation: 'slideInRight 0.6s ease 0.4s both',
          boxShadow: '0 0 15px rgba(0, 229, 200, 0.2)',
        }}
        id="register"
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(0, 229, 200, 0.6)';
          (e.target as HTMLElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.boxShadow = '0 0 15px rgba(0, 229, 200, 0.2)';
          (e.target as HTMLElement).style.transform = 'scale(1)';
        }}
      >
        <span className="relative z-10">INITIALIZE</span>
        <span 
          className="absolute inset-0 bg-cyan-500 -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        />
      </button>
    </nav>
  );
}
