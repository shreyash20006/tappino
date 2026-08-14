import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm coffee, subtle maroon embers, and velvet cream tones
    const colors = [
      'rgba(139, 90, 60, ',   // Coffee Brown
      'rgba(139, 0, 0, ',     // Deep Maroon
      'rgba(166, 106, 66, ',  // Warm Coffee Light
      'rgba(226, 213, 195, ', // Sand Cream
    ];

    const particleCount = Math.min(30, Math.floor(width / 40));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.12),
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.4 + 0.08,
        fadeSpeed: (Math.random() * 0.004 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.fadeSpeed;

        if (p.opacity <= 0.04 || p.opacity >= 0.5) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.opacity))})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(139, 0, 0, 0.2)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-40"
      aria-hidden="true"
    />
  );
};
