import { useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  alt: string;
}

export function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-muted shadow-card"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt={`${alt} after cleaning`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} before cleaning`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
        After
      </span>

      <input
        aria-label="Reveal before and after"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-lifted">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
