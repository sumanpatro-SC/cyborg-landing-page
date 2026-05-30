'use client';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-slate-900/95 px-12 py-14 text-center">
      <div className="ft-logo font-orbitron text-2xl font-black text-white tracking-wider mb-2">
        CYBORG PROTOCOL
      </div>
      <div className="ft-sub font-mono text-xs text-cyan-700 tracking-widest mb-7">
        IIT BOMBAY TECHFEST · CAMPUS AMBASSADOR TASK
      </div>
      <div className="ft-links flex justify-center gap-8 mb-7">
        <a
          href="#"
          className="font-mono text-xs text-cyan-700 hover:text-cyan-500 transition-colors tracking-tighter"
        >
          REGISTER
        </a>
        <a
          href="#"
          className="font-mono text-xs text-cyan-700 hover:text-cyan-500 transition-colors tracking-tighter"
        >
          EVENTS
        </a>
        <a
          href="#"
          className="font-mono text-xs text-cyan-700 hover:text-cyan-500 transition-colors tracking-tighter"
        >
          SPONSORS
        </a>
        <a
          href="#"
          className="font-mono text-xs text-cyan-700 hover:text-cyan-500 transition-colors tracking-tighter"
        >
          CONTACT
        </a>
        <a
          href="#"
          className="font-mono text-xs text-cyan-700 hover:text-cyan-500 transition-colors tracking-tighter"
        >
          TECHFEST.ORG
        </a>
      </div>
      <div className="ft-copy font-mono text-xs text-cyan-700/30 tracking-widest">
        /// SYSTEM SECURE · ALL MODULES ACTIVE · CYBORG PROTOCOL v2.7.4 ///
      </div>
    </footer>
  );
}
