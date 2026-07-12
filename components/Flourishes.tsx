// Shared line-art flourishes ported from the mockup.

const petalRotations = [0, 60, 120, 180, 240, 300];

export function SectionDivider({ width = 200 }: { width?: number }) {
  const height = Math.round((width * 26) / 240);
  return (
    <svg
      viewBox="0 0 240 26"
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      className="section-divider"
    >
      <g
        stroke="var(--sage)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6,13 H96" />
        <path d="M144,13 H234" />
        <path d="M96,13 c9,-6 16,-2 20,0 c-9,6 -16,2 -20,0 z" />
        <path d="M144,13 c-9,-6 -16,-2 -20,0 c9,6 16,2 20,0 z" />
      </g>
      <g
        transform="translate(120,13)"
        stroke="var(--sage)"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {petalRotations.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-5.5"
            rx="1.8"
            ry="4.2"
            transform={deg ? `rotate(${deg})` : undefined}
          />
        ))}
        <circle r="1.6" fill="var(--accent)" stroke="none" />
      </g>
    </svg>
  );
}

// Cape Dutch gable crest - used in the footer (with finial) and the map marker.
export function Gable({
  width = 120,
  strokeWidth = 1.7,
  color = "var(--green)",
  finial = false,
  className,
  style,
}: {
  width?: number;
  strokeWidth?: number;
  color?: string;
  finial?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const height = Math.round((width * 132) / 220);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 132"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <g
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26,120 H194" />
        <path d="M40,120 V72" />
        <path d="M180,120 V72" />
        <path d="M40,72 C40,60 52,58 58,66 C64,74 56,82 48,80" />
        <path d="M180,72 C180,60 168,58 162,66 C156,74 164,82 172,80" />
        <path d="M58,66 C84,60 84,34 110,34" />
        <path d="M162,66 C136,60 136,34 110,34" />
        <path d="M92,34 Q110,14 128,34" />
        <path d="M92,34 V52" />
        <path d="M128,34 V52" />
        <path d="M92,52 H128" />
        <circle cx="110" cy="44" r="6.5" />
        {finial && <path d="M110,14 V6" />}
      </g>
      {finial && <circle cx="110" cy="4" r="2.4" fill={color} stroke="none" />}
    </svg>
  );
}
