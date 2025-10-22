import { useEffect, useRef } from 'react';

export const WaveformAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerY = canvas.height / 2;
      const bars = 60;
      const barWidth = canvas.width / bars;
      
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        const height = Math.sin(time + i * 0.5) * 100 + 50;
        
        const gradient = ctx.createLinearGradient(x, centerY - height, x, centerY + height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.03)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, centerY - height / 2, barWidth - 2, height);
      }
      
      time += 0.03;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(1px)' }}
    />
  );
};
