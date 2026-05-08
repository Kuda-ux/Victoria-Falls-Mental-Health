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
 * Cinematic looping video backdrop.
 *
 * Strategy: when the device supports motion + isn't on save-data, render ONLY
 * a <video> element. We rely on the browser's native `poster` attribute to
 * paint a still frame instantly — it disappears the moment the first video
 * frame is decoded, so there is no visible swap from image to video.
 *
 * On reduce-motion or save-data, we render a static <Image> instead.
 */
export default function VideoBackground({
  src = '/footage.mp4',
  poster,
  posterAlt = '',
  className = ''
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // null = haven't decided yet (SSR / first paint), true = play video, false = static image
  const [useVideo, setUseVideo] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    // @ts-expect-error - non-standard but widely supported
    const saveData = navigator.connection?.saveData === true;
    setUseVideo(!reduceMotion && !saveData);
  }, []);

  useEffect(() => {
    if (!useVideo) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('loadeddata', tryPlay, { once: true });
  }, [useVideo]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-primary-dark ${className}`} aria-hidden="true">
      {useVideo === false && (
        <Image
          src={poster}
          alt={posterAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      {useVideo === true && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
    </div>
  );
}
