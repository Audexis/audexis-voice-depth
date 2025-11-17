import { useParallax } from "@/hooks/useParallax";

export const SoundWaves = () => {
  const slowWave = useParallax(0.15);
  const mediumWave = useParallax(0.25);
  const fastWave = useParallax(0.4);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slow wave - bottom layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        style={{ transform: `translateY(${slowWave}px)` }}
      >
        <path
          d="M 0 300 Q 250 250 500 300 T 1000 300 T 1500 300 T 2000 300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-white"
        />
        <path
          d="M 0 500 Q 250 450 500 500 T 1000 500 T 1500 500 T 2000 500"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white"
        />
      </svg>

      {/* Medium wave - middle layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        style={{ transform: `translateY(${mediumWave}px)` }}
      >
        <path
          d="M 0 200 Q 200 150 400 200 T 800 200 T 1200 200 T 1600 200 T 2000 200"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white"
        />
        <path
          d="M 0 600 Q 200 550 400 600 T 800 600 T 1200 600 T 1600 600 T 2000 600"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white"
        />
      </svg>

      {/* Fast wave - top layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        style={{ transform: `translateY(${fastWave}px)` }}
      >
        <path
          d="M 0 350 Q 150 320 300 350 T 600 350 T 900 350 T 1200 350 T 1500 350 T 1800 350 T 2100 350"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white"
        />
        <path
          d="M 0 450 Q 150 420 300 450 T 600 450 T 900 450 T 1200 450 T 1500 450 T 1800 450 T 2100 450"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-white"
        />
      </svg>
    </div>
  );
};
