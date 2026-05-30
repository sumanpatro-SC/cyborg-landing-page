'use client';

import { useEffect, useRef } from 'react';

interface DNAHelixProps {
  position: 'left' | 'right';
}

export default function DNAHelix({ position }: DNAHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 56; i++) {
        const y = i * 5;
        const a = 0.25 + ((Math.sin(t + i * 0.18) + 1) / 2) * 0.55;
        const x1 = 27 + Math.sin(t + i * 0.18) * 20;
        const x2 = 27 - Math.sin(t + i * 0.18) * 20;

        ctx.beginPath();
        ctx.arc(x1, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,200,${a})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x2, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,166,35,${a})`;
        ctx.fill();

        if (i % 4 === 0) {
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = 'rgba(200,230,240,0.1)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Backbone 1
      ctx.beginPath();
      for (let i = 0; i < 56; i++) {
        const y = i * 5;
        const x1 = 27 + Math.sin(t + i * 0.18) * 20;
        i ? ctx.lineTo(x1, y) : ctx.moveTo(x1, y);
      }
      ctx.strokeStyle = 'rgba(0,229,200,0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Backbone 2
      ctx.beginPath();
      for (let i = 0; i < 56; i++) {
        const y = i * 5;
        const x2 = 27 - Math.sin(t + i * 0.18) * 20;
        i ? ctx.lineTo(x2, y) : ctx.moveTo(x2, y);
      }
      ctx.strokeStyle = 'rgba(245,166,35,0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      t += 0.022;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id={`dna-${position === 'left' ? 'l' : 'c'}`}
      width={54}
      height={280}
      className={`absolute top-1/2 ${
        position === 'left' ? 'left-6' : 'right-6'
      } -translate-y-1/2 opacity-30 ${position === 'left' ? 'scale-x-[-1]' : ''}`}
    />
  );
}
