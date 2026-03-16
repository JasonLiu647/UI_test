"use client";

import { useState } from "react";
import type { MediaSource } from "@/data/articles";

const BIAS_META = {
  left: { label: "偏左", color: "#8B0000", bg: "bg-red-50 border-red-200" },
  center: { label: "中立", color: "#2F4F2F", bg: "bg-green-50 border-green-200" },
  right: { label: "偏右", color: "#1a1a6e", bg: "bg-blue-50 border-blue-200" },
};

interface AiReportProps {
  aiVerdict: string;
  sources: MediaSource[];
  isOpen: boolean;
}

export default function AiReport({ aiVerdict, sources, isOpen }: AiReportProps) {
  const [voted, setVoted] = useState<string | null>(null);

  return (
    <div
      className="overflow-hidden transition-all duration-500"
      style={{
        maxHeight: isOpen ? 600 : 0,
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="mt-4 p-4 bg-parchment-100/80 border border-magic-gold rounded-sm relative">
        {/* Seal */}
        <div className="absolute -top-3 right-4 bg-magic-deep-red text-parchment-100 px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest font-display shadow-md">
          🔮 AI 鑑定報告
        </div>

        {/* Verdict */}
        <p className="text-sm text-magic-dark-brown leading-relaxed mt-2 mb-4 font-body indent-8">
          {aiVerdict}
        </p>

        {/* Sources */}
        <div className="text-[10px] font-bold text-magic-sepia tracking-widest mb-2 font-display">
          ◆ 各媒體立場一覽
        </div>

        {sources.map((src, i) => (
          <div
            key={i}
            className="flex items-baseline gap-3 py-2"
            style={{
              borderBottom:
                i < sources.length - 1
                  ? "1px dashed rgba(201,168,76,0.4)"
                  : "none",
            }}
          >
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border shrink-0 ${BIAS_META[src.bias].bg}`}
              style={{ color: BIAS_META[src.bias].color }}
            >
              {src.name}
            </span>
            <span className="text-xs text-magic-dark-brown font-body">
              {src.take}
            </span>
          </div>
        ))}

        {/* Vote */}
        <div className="flex gap-2 mt-4">
          {(["left", "center", "right"] as const).map((key) => (
            <button
              key={key}
              onClick={(e) => {
                e.stopPropagation();
                setVoted(key);
              }}
              className="flex-1 py-2 rounded-sm text-sm font-bold font-display tracking-wider transition-all duration-300 border"
              style={{
                backgroundColor:
                  voted === key ? BIAS_META[key].color : "transparent",
                borderColor: BIAS_META[key].color,
                color:
                  voted === key ? "#F5E6C8" : BIAS_META[key].color,
              }}
            >
              {voted === key
                ? `✓ ${BIAS_META[key].label}`
                : `投「${BIAS_META[key].label}」`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
