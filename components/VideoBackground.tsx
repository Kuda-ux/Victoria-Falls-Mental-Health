'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  src?: string;
  poster: string;
  posterAlt?: string;
  className?: string;
};

/**
 * Cinematic looping video backdrop with graceful fallbacks:
 * - Renders a poster <Image> immediately (LCP-friendly).
 * - Loads & autoplays muted video on capable devices once mounted.
 * - Skips video on `prefers-reduced-motion` or `connection.saveData`.
 * - On mobile (narrow viewport) the video still plays inline & muted; if it
 *   fails to start, the poster image remains as the visible fallback.
 */
export default function VideoBackground({
  src = '/footage.mp4',
  poster,
  posterAlt = '',
  className = ''
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    // @ts-expect-error - non-standard but widely supported
    const saveData = navigator.connection?.saveData === true;
    if (reduceMotion || saveData) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('loadeddata', tryPlay, { once: true });
  }, [enabled]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Poster (always rendered for instant paint + fallback) */}
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {enabled && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        />
      )}
    </div>
  );
}
