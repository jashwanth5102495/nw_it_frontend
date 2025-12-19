import React from 'react';

export interface ShimmeringTextProps {
  text: string;
  wave?: boolean;
  duration?: number; // seconds
  className?: string;
}

/**
 * ShimmeringText renders gradient-animated text using CSS background-clip.
 * - Works without external dependencies.
 * - Controls: wave (extra subtle wobble), duration (animation speed).
 */
export const ShimmeringText: React.FC<ShimmeringTextProps> = ({
  text,
  wave = false,
  duration = 2.5,
  className = '',
}) => {
  const styleVar: React.CSSProperties = {
    // @ts-expect-error CSS variable
    '--shimmer-duration': `${duration}s`,
  };

  return (
    <span className={`${className} shimmer-text ${wave ? 'shimmer-wave' : ''}`} style={styleVar}>
      {/* Scoped styles so it works anywhere without global CSS changes */}
      <style>{`
        @keyframes shimmer-slide {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background-image: linear-gradient(
            90deg,
            rgba(255,255,255,0.15) 0%,
            rgba(255,255,255,0.85) 50%,
            rgba(255,255,255,0.15) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer-slide var(--shimmer-duration) linear infinite;
          /* Slight glow for high-contrast hero */
          text-shadow: 0 0 12px rgba(255,255,255,0.08);
        }
        .shimmer-wave {
          /* subtle micro-oscillation to feel alive */
          animation-name: shimmer-slide, shimmer-wobble;
          animation-duration: var(--shimmer-duration), 3.5s;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
        }
        @keyframes shimmer-wobble {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-0.5px); }
        }
      `}</style>
      {text}
    </span>
  );
};

export default ShimmeringText;