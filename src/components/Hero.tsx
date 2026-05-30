"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,200,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm tracking-[0.5em] text-cyan-400"
        >
          /// IIT BOMBAY TECHFEST ///
        </motion.p>

        {/* Glitch Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glitch relative text-6xl font-black uppercase tracking-[0.2em] text-white md:text-8xl"
          data-text="CYBORG"
        >
          CYBORG
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm tracking-[0.6em] text-cyan-300 md:text-base"
        >
          HUMAN • MACHINE • EVOLVED
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button className="border border-cyan-400 bg-cyan-400 px-8 py-3 font-mono text-sm tracking-widest text-black transition hover:brightness-110">
            INITIALIZE
          </button>

          <button className="border border-cyan-400 px-8 py-3 font-mono text-sm tracking-widest text-cyan-400 transition hover:bg-cyan-400/10">
            LEARN MORE
          </button>
        </motion.div>
      </div>
    </section>
  );
}