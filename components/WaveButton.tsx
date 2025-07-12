'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { LucideIcon } from 'lucide-react'; // for type safety

interface WaveButtonProps {
  text: string;
  icon?: LucideIcon | null; // Pass a Lucide icon component or null
  color?: string;           // Text + border color (Tailwind)
  waveColor?: string;       // Background fill color (Tailwind)
}

export default function WaveButton({
  text,
  icon: Icon,
  color = 'text-blue-600 border-blue-600',
  waveColor = 'bg-blue-600',
}: WaveButtonProps) {
  const waveRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(waveRef.current, {
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
    gsap.to(textRef.current, {
      color: '#ffffff',
      duration: 0.3,
    });
  };

  const handleLeave = () => {
    gsap.to(waveRef.current, {
      y: '100%',
      duration: 0.6,
      ease: 'power2.in',
    });
    gsap.to(textRef.current, {
      color: '', // revert to Tailwind default
      duration: 0.3,
    });
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden px-6 py-3 rounded-lg border font-semibold group transition-colors duration-300 ${color}`}
    >
      {/* Animated Wave Background */}
      <div
        ref={waveRef}
        className={`absolute bottom-0 left-1/2 w-[200%] h-[200%] rounded-full ${waveColor} z-0 transform -translate-x-1/2 translate-y-full`}
      />

      {/* Button Text + Optional Icon */}
      <span
        ref={textRef}
        className="relative z-10 flex items-center gap-2 transition-colors duration-300"
      >
        {text}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
}
