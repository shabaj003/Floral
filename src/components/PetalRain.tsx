import { useMemo } from "react";

export default function PetalRain({ count = 22 }: { count?: number }) {
  const petals = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 12 + Math.random() * 14,
      size: 10 + Math.random() * 16,
      hue: Math.random() > 0.5 ? "#e8b4b8" : "#f5d98a",
      opacity: 0.4 + Math.random() * 0.5,
    })), [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle at 30% 30%, ${p.hue} 0%, transparent 70%)`,
            borderRadius: "50% 0 50% 50%",
            opacity: p.opacity,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
