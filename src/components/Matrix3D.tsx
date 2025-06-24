
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

    // Matrix animation variables with legal terms and company values as complete words
    const words = ['ANNA&CO', 'ADVOCATES', 'JUSTICE', 'LAW', 'INTEGRITY', 'HONESTY', 'SECRECY', 'LEGAL', 'ETHICS', 'RIGHTS', 'ADVOCACY', 'CONFIDENTIALITY', 'TRUST', 'EXCELLENCE', 'PROFESSIONALISM', 'DEDICATION', 'COUNSEL', 'LITIGATION', 'CONTRACT', 'PROPERTY', 'FAMILY', 'CORPORATE'];
    const fontSize = 16;
    const lineHeight = fontSize + 8; // Add spacing between lines
    const columns = Math.floor(canvas.width / (fontSize * 3)); // Wider spacing for words
    const drops: { y: number; word: string; alpha: number }[] = [];

    // Initialize drops with words
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * canvas.height,
        word: words[Math.floor(Math.random() * words.length)],
        alpha: Math.random() * 0.8 + 0.2
      };
    }

    let animationId: number;
    let lastTime = 0;
    const frameDelay = 150 / speed; // Much slower animation - 150ms base delay

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < frameDelay) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(248, 250, 252, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'left';

      // Draw words
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * (fontSize * 3);
        const y = drop.y;

        // Vary the opacity and color for visual interest
        ctx.fillStyle = `rgba(30, 64, 175, ${drop.alpha})`;
        ctx.fillText(drop.word, x, y);

        // Reset drop to top when it reaches bottom
        if (y > canvas.height + 50 && Math.random() > 0.98) {
          drops[i] = {
            y: -50,
            word: words[Math.floor(Math.random() * words.length)],
            alpha: Math.random() * 0.8 + 0.2
          };
        }

        // Move drop down very slowly
        drops[i].y += lineHeight * 0.2 * speed;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

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
