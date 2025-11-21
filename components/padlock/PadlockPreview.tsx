interface PadlockPreviewProps {
  color: string;
  engraving: string;
  shackle: string;
  material: string;
}

const COLORS = [
  { id: "red", name: "Red", hex: "#ef4444" },
  { id: "orange", name: "Orange", hex: "#f97316" },
  { id: "yellow", name: "Yellow", hex: "#eab308" },
  { id: "green", name: "Green", hex: "#22c55e" },
  { id: "blue", name: "Blue", hex: "#3b82f6" },
  { id: "purple", name: "Purple", hex: "#a855f7" },
  { id: "black", name: "Black", hex: "#111827" },
  { id: "white", name: "White", hex: "#f9fafb", border: "#e5e7eb", text: "#111827" },
];

export function PadlockPreview({ color, engraving, shackle, material }: PadlockPreviewProps) {
  const col = COLORS.find((c) => c.id === color) || COLORS[0];
  const bodyFill = col.hex;
  const textFill = col.text || "#ffffff";
  const border = col.border || "#0f172a";

  const shackH = shackle === "tall" ? 82 : 52;
  const bodyTop = 110;
  const topY = bodyTop - shackH;

  return (
    <svg viewBox="0 0 220 220" className="w-full h-auto">
      <ellipse cx="110" cy="205" rx="70" ry="10" fill="#e5e7eb" />
      <path
        d={`M70 ${bodyTop} V${topY} A40 40 0 0 1 150 ${topY} V${bodyTop}`}
        fill="none"
        stroke="#9ca3af"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <rect x="50" y="110" width="120" height="90" rx="14" fill={bodyFill} stroke={border} strokeWidth="4" />
      <circle cx="160" cy="155" r="6" fill={border} />
      <text x="110" y="158" fill={textFill} fontSize="14" fontWeight="700" textAnchor="middle">
        {engraving || "GEMBOKLOTO"}
      </text>
      <text x="110" y="178" fill={textFill} fontSize="10" textAnchor="middle">
        {material.toUpperCase()}
      </text>
    </svg>
  );
}
