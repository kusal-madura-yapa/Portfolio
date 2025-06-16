import { keyframes } from '@emotion/react';

// Define keyframes for animations
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

export const slideInDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const pulseGlow = (color: string) => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${color};
  }
  50% {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 ${color};
  }
`;

// Animation durations
export const animationDurations = {
  fast: '0.3s',
  medium: '0.5s',
  slow: '0.8s',
  verySlow: '1s',
};

// Animation timing functions
export const animationTimings = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  linear: 'linear',
};

// Animation delays
export const animationDelays = {
  none: '0s',
  short: '0.1s',
  medium: '0.2s',
  long: '0.3s',
};

// Helper function to create animation string
export const createAnimation = (
  animation: ReturnType<typeof keyframes>,
  duration = animationDurations.medium,
  timing = animationTimings.easeOut,
  delay = animationDelays.none,
  fillMode = 'both'
) => `${animation} ${duration} ${timing} ${delay} ${fillMode}`;