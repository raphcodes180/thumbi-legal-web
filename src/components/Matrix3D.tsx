
import { useEffect, useRef } from 'react';

interface Matrix3DProps {
  speed?: number;
  opacity?: number;
}

const Matrix3D = ({ speed = 1, opacity = 0.3 }: Matrix3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix animation variables
    const chars = 'JUSTICE•LAW•ADVOCACY•LEGAL•ETHICS•RIGHTS';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    let animationId: number;

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(248, 250, 252, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = '#3b82f6';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i];

        ctx.fillStyle = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`;
        ctx.fillText(char, x, y);

        // Reset drop to top when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down (speed controlled by prop)
        drops[i] += fontSize * 0.5 * speed;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        mixBlendMode: 'multiply',
        opacity: opacity
      }}
    />
  );
};

export default Matrix3D;
