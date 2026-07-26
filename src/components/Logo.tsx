export function LogoMark({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
      <defs>
        <linearGradient id="goldg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d98a" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke="url(#goldg)" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#goldg)" strokeWidth="0.5" opacity="0.6" />
      {/* flower on top */}
      <g transform="translate(50 22)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} cx="0" cy="-6" rx="3.5" ry="6" fill="url(#goldg)" transform={`rotate(${a})`} />
        ))}
        <circle r="2.5" fill="#faf3e0" />
      </g>
      {/* FS monogram */}
      <text x="50" y="62" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="28" fontStyle="italic" fill="url(#goldg)" fontWeight="500">FS</text>
      <text x="50" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="#d4af37" letterSpacing="3">FLORALART</text>
    </svg>
  );
}

export function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 30" className={className} fill="none">
      <path d="M10 15 L120 15" stroke="#d4af37" strokeWidth="0.7" opacity="0.6" />
      <g transform="translate(150 15)">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="0" cy="-6" rx="2" ry="5" fill="#d4af37" transform={`rotate(${a})`} opacity="0.9" />
        ))}
        <circle r="2" fill="#f5d98a" />
      </g>
      <path d="M180 15 L290 15" stroke="#d4af37" strokeWidth="0.7" opacity="0.6" />
      <path d="M60 15 Q80 5 100 15" stroke="#8b6914" strokeWidth="0.4" opacity="0.5" fill="none" />
      <path d="M200 15 Q220 25 240 15" stroke="#8b6914" strokeWidth="0.4" opacity="0.5" fill="none" />
    </svg>
  );
}
