"use client";

const BIAS_META = {
  left: { label: "偏左", color: "#8B0000" },
  center: { label: "中立", color: "#2F4F2F" },
  right: { label: "偏右", color: "#1a1a6e" },
};

interface BiasGaugeProps {
  bias: { left: number; center: number; right: number };
}

export default function BiasGauge({ bias }: BiasGaugeProps) {
  const total = bias.left + bias.center + bias.right;
  return (
    <div className="my-3">
      <div className="flex h-2.5 rounded-sm overflow-hidden border border-magic-gold/50">
        {(["left", "center", "right"] as const).map((key) => (
          <div
            key={key}
            style={{
              width: `${(bias[key] / total) * 100}%`,
              backgroundColor: BIAS_META[key].color,
              transition: "width 1.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        {(["left", "center", "right"] as const).map((key) => (
          <span
            key={key}
            className="text-[10px] font-bold font-display"
            style={{ color: BIAS_META[key].color }}
          >
            {BIAS_META[key].label} {bias[key]}%
          </span>
        ))}
      </div>
    </div>
  );
}
