"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
}

export default function MagicCard({ children, className }: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-sm magic-border bg-magic-ink/80 backdrop-blur-sm",
        "before:absolute before:w-40 before:h-40 before:rounded-full",
        "before:bg-magic-gold/10 before:blur-2xl",
        "before:left-[var(--mouse-x,50%)] before:top-[var(--mouse-y,50%)]",
        "before:-translate-x-1/2 before:-translate-y-1/2",
        "before:pointer-events-none before:transition-opacity before:duration-300",
        "before:opacity-0 hover:before:opacity-100",
        "transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
