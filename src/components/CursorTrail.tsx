import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const trails = trailsRef.current;
    let idx = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
      const t = trails[idx % trails.length];
      if (t) {
        t.style.transform = `translate(${mx - 8}px, ${my - 8}px) scale(1) rotate(${Math.random() * 360}deg)`;
        t.style.opacity = "0.9";
        setTimeout(() => { t.style.opacity = "0"; t.style.transform = `translate(${mx - 8}px, ${my + 30}px) scale(0.3) rotate(${Math.random() * 360}deg)`; }, 30);
      }
      idx++;
    };
    const loop = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    const raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={dotRef} className="absolute h-2 w-2 rounded-full bg-gold" style={{ boxShadow: "0 0 12px #d4af37" }} />
      <div ref={ringRef} className="absolute h-9 w-9 rounded-full border border-gold/60 transition-transform" />
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailsRef.current[i] = el; }}
          className="absolute h-4 w-4 opacity-0 transition-all duration-700"
          style={{ background: "radial-gradient(circle, #f5d98a 0%, #d4af37 40%, transparent 70%)", borderRadius: "50% 0 50% 50%" }}
        />
      ))}
    </div>
  );
}
