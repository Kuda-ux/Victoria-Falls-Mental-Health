export default function WaveDivider({ flip = false, color = '#fff' }: { flip?: boolean; color?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`w-full h-[80px] md:h-[120px] block ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path
        d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,60 L1440,120 L0,120 Z"
        fill={color}
      />
    </svg>
  );
}
